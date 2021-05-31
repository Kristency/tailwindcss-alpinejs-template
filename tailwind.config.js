module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['public/*.html']
    },
    theme: {
        extend: {}
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')]
};
