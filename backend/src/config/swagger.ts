import swaggerJsdoc from 'swagger-jsdoc';
import { SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: "D'CARMEN FLOWERS API",
    version: '1.0.0',
    description: 'API para gestión de productos, clientes, repartidores y pedidos de D\'CARMEN FLOWERS',
    contact: {
      name: 'D\'CARMEN FLOWERS',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Servidor de desarrollo',
    },
  ],
  components: {
    schemas: {
      Product: {
        type: 'object',
        required: ['name', 'price', 'stock'],
        properties: {
          id: {
            type: 'string',
            description: 'ID único del producto',
          },
          name: {
            type: 'string',
            description: 'Nombre del producto',
          },
          description: {
            type: 'string',
            description: 'Descripción del producto',
          },
          price: {
            type: 'number',
            description: 'Precio del producto',
            minimum: 0,
          },
          stock: {
            type: 'number',
            description: 'Cantidad en stock',
            minimum: 0,
          },
          imageUrl: {
            type: 'string',
            description: 'URL de la imagen del producto',
          },
        },
      },
      Client: {
        type: 'object',
        required: ['name', 'phone'],
        properties: {
          id: {
            type: 'string',
            description: 'ID único del cliente',
          },
          name: {
            type: 'string',
            description: 'Nombre completo del cliente',
          },
          phone: {
            type: 'string',
            description: 'Teléfono del cliente',
          },
          email: {
            type: 'string',
            description: 'Email del cliente',
          },
          address: {
            type: 'string',
            description: 'Dirección del cliente',
          },
        },
      },
      Courier: {
        type: 'object',
        required: ['name', 'phone'],
        properties: {
          id: {
            type: 'string',
            description: 'ID único del repartidor',
          },
          name: {
            type: 'string',
            description: 'Nombre completo del repartidor',
          },
          phone: {
            type: 'string',
            description: 'Teléfono del repartidor',
          },
          status: {
            type: 'string',
            enum: ['available', 'busy', 'inactive'],
            description: 'Estado del repartidor',
          },
        },
      },
      OrderItem: {
        type: 'object',
        required: ['productId', 'quantity'],
        properties: {
          productId: {
            type: 'string',
            description: 'ID del producto',
          },
          quantity: {
            type: 'number',
            description: 'Cantidad del producto',
            minimum: 1,
          },
          unitPrice: {
            type: 'number',
            description: 'Precio unitario (opcional, usa el precio del producto si no se especifica)',
            minimum: 0,
          },
        },
      },
      Order: {
        type: 'object',
        required: ['clientId', 'items'],
        properties: {
          id: {
            type: 'string',
            description: 'ID único del pedido',
          },
          clientId: {
            type: 'string',
            description: 'ID del cliente',
          },
          courierId: {
            type: 'string',
            nullable: true,
            description: 'ID del repartidor asignado',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de creación del pedido',
          },
          total: {
            type: 'number',
            description: 'Total del pedido',
            minimum: 0,
          },
          status: {
            type: 'string',
            enum: ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'],
            description: 'Estado del pedido',
          },
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrderItem',
            },
            description: 'Items del pedido',
          },
          note: {
            type: 'string',
            description: 'Nota adicional del pedido',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Mensaje de error',
          },
        },
      },
      SalesReport: {
        type: 'object',
        properties: {
          total: {
            type: 'number',
            description: 'Total de ventas',
          },
          count: {
            type: 'number',
            description: 'Cantidad de pedidos',
          },
          orders: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Order',
            },
          },
        },
      },
    },
  },
};

const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/app.ts'], // Rutas donde buscar documentación JSDoc
};

export const swaggerSpec = swaggerJsdoc(options);

