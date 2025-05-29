module.exports = [
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'http:', 'https:'],
					'img-src': [
						"'self'",
						'data:',
						'blob:',
						'res.cloudinary.com',
						'market-assets.strapi.io',
						'91.197.97.254',
						'tradeauto-group.ru',
					],
					'media-src': [
						"'self'",
						'data:',
						'blob:',
						'res.cloudinary.com',
						'market-assets.strapi.io',
						'91.197.97.254',
						'tradeauto-group.ru',
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	{
		name: 'strapi::cors',
		config: {
			enabled: true,
			origin: [
				'https://tradeauto-group.ru',
				'http://localhost:8080',
				'http://localhost:3000',
			],
			methods: [
				'GET',
				'POST',
				'PUT',
				'PATCH',
				'DELETE',
				'HEAD',
				'OPTIONS',
			],
			headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
			keepHeaderOnError: true,
		},
	},
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
