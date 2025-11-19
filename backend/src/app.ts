import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import productsRoutes from './routes/products.routes';
import clientsRoutes from './routes/clients.routes';
import couriersRoutes from './routes/couriers.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/products', productsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/couriers', couriersRoutes);
app.use('/api/orders', ordersRoutes);

export default app;
