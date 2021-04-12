const tailwind css = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')

    ]
}