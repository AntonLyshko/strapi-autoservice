module.exports = ({ env }) => ({
	documentation: {
		enabled: true,
		config: {
			openapi: '3.0.0',
			info: {
				version: '1.0.0',
				title: 'Документация API Моего Автосервиса',
				description: 'API для взаимодействия с контентом автосервиса',
			},
			servers: [
				{
					url: env('STRAPI_PUBLIC_URL', 'https://tradeauto-group.ru'),
					description: 'Production server',
				},
			],
			components: {
				securitySchemes: {
					bearerAuth: {
						type: 'http',
						scheme: 'bearer',
						bearerFormat: 'JWT',
					},
				},
			},
			security: [
				{
					bearerAuth: [],
				},
			],
		},
	},
});
