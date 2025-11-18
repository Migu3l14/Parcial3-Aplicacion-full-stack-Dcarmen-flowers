import { Router } from 'express';
import { store } from '../data/store';
import { v4 as uuid } from 'uuid';
const router = Router();

/**
 * @swagger
 * /couriers:
 *   get:
 *     summary: Obtener todos los repartidores
 *     tags: [Couriers]
 *     responses:
 *       200:
 *         description: Lista de repartidores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Courier'
 */
router.get('/', (_req, res) => res.json(store.couriers));

/**
 * @swagger
 * /couriers:
 *   post:
 *     summary: Crear un nuevo repartidor
 *     tags: [Couriers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [available, busy, inactive]
 *                 default: available
 *     responses:
 *       201:
 *         description: Repartidor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Courier'
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', (req, res) => {
  const { name, phone, status } = req.body;
  if (!name || !phone) return res.status(400).json({ error: 'missing' });
  const courier = { id: uuid(), name, phone, status: status || 'available' };
  store.couriers.push(courier);
  res.status(201).json(courier);
});

export default router;
