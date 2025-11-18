import { Router } from 'express';
import { store } from '../data/store';
const router = Router();

/**
 * @swagger
 * /reports/sales:
 *   get:
 *     summary: Obtener reporte de ventas
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio (formato ISO)
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin (formato ISO)
 *     responses:
 *       200:
 *         description: Reporte de ventas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalesReport'
 */
router.get('/sales', (req, res) => {
  const { from, to } = req.query as { from?: string; to?: string; };
  const fromDate = from ? new Date(from) : new Date(0);
  const toDate = to ? new Date(to) : new Date();

  const orders = store.orders.filter(o => {
    const d = new Date(o.createdAt);
    return d >= fromDate && d <= toDate && o.status !== 'cancelled';
  });
  const total = orders.reduce((s, o) => s + o.total, 0);
  res.json({ total, count: orders.length, orders });
});

export default router;
