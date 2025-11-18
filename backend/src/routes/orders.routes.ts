import { Router } from 'express';
import { store, Order, OrderItem } from '../data/store';
import { v4 as uuid } from 'uuid';
const router = Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, confirmed, preparing, out_for_delivery, delivered, cancelled]
 *         description: Filtrar pedidos por estado
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/', (req, res) => {
  const { status } = req.query;
  if (status) {
    return res.json(store.orders.filter(o => o.status === status));
  }
  res.json(store.orders);
});

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - items
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: ID del cliente
 *               courierId:
 *                 type: string
 *                 description: ID del repartidor (opcional)
 *               items:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/OrderItem'
 *               note:
 *                 type: string
 *                 description: Nota adicional del pedido
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Error de validación o stock insuficiente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', (req, res) => {
  const { clientId, courierId, items, note } = req.body as { clientId: string; courierId?: string; items: OrderItem[]; note?: string; };
  if (!clientId || !items || items.length === 0) return res.status(400).json({ error: 'missing fields' });

  let total = 0;
  for (const it of items) {
    const p = store.products.find(x => x.id === it.productId);
    if (!p) return res.status(400).json({ error: `product ${it.productId} not found` });
    if (p.stock < it.quantity) return res.status(400).json({ error: `insufficient stock for ${p.name}` });
    total += it.quantity * (it.unitPrice ?? p.price);
    p.stock -= it.quantity;
  }

  const order: Order = {
    id: uuid(),
    clientId,
    courierId: courierId ?? null,
    createdAt: new Date().toISOString(),
    total,
    status: 'pending',
    items,
    note
  };
  store.orders.push(order);
  res.status(201).json(order);
});

/**
 * @swagger
 * /orders/{id}/status:
 *   patch:
 *     summary: Actualizar el estado de un pedido (también permite asignar repartidor si se incluye courierId)
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, preparing, out_for_delivery, delivered, cancelled]
 *               courierId:
 *                 type: string
 *                 description: ID del repartidor a asignar (opcional)
 *     responses:
 *       200:
 *         description: Estado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Pedido o repartidor no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.patch('/:id/status', (req, res) => {
  const o = store.orders.find(x => x.id === req.params.id);
  if (!o) return res.status(404).json({ error: 'not found' });
  const { status, courierId } = req.body;
  if (!status) return res.status(400).json({ error: 'status required' });
  o.status = status;
  if (courierId) {
    const c = store.couriers.find(x => x.id === courierId);
    if (!c) return res.status(404).json({ error: 'courier not found' });
    o.courierId = courierId;
  }
  res.json(o);
});

export default router;
