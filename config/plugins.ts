// config/plugins.js
module.exports = ({ env }) => ({
	// ... другие конфигурации плагинов
	documentation: {
		enabled: true,
		config: {
			openapi: '3.0.0',
			info: {
				version: '1.0.0',
				title: 'Документация API Моего Автосервиса',
				description: 'API для взаимодействия с контентом автосервиса',
				// ... другая информация
			},
			// Если вы хотите ограничить доступ к UI документации
			// 'x-strapi-config': {
			//   rateLimit: {
			//     max: 5, // Пример ограничения
			//     interval: 60000,
			//   },
			//   auth: false, // Установите true, если нужен какой-то механизм аутентификации
			// },
			servers: [
				{
					url: env('STRAPI_URL', 'http://localhost:1337'),
					description: 'Development server',
				},
			],
			// Можно добавить компоненты безопасности, если используете API токены
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
				// Применить bearerAuth ко всем эндпоинтам по умолчанию
				{
					bearerAuth: [],
				},
			],
		},
	},
});
