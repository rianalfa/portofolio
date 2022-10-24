/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            'animation': {
                'gradient-x':'gradient-x 15s ease infinite',
                'gradient-y':'gradient-y 15s ease infinite',
                'gradient-xy':'gradient-xy 15s ease infinite',
                'bounce-right': 'bounce-right 1.5s infinite',
                'scale-small': 'scale-small ease-out',
                'scale-big': 'scale-big ease-out',
                'fade-in-down': 'fade-in-down ease-out',
                'fade-in-up': 'fade-in-up ease-out',
                'fade-in-left': 'fade-in-left ease-out',
                'fade-in-right': 'fade-in-right ease-out',
            },
            'keyframes': {
                'gradient-y': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'center top'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'center center'
                    }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size':'200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
                },
                'bounce-right': {
                    '0%, 100%': {
                        'transform': 'translateX(-25%)',
                    },
                    '50%': {
                        'transform': 'translateX(0)',
                    }
                },
                'scale-small': {
                    '0%': {
                        'transform': 'scale(1.5)',
                        'opacity': '0',
                    },
                    '100%': {
                        'transform': 'scale(1)',
                        'opacity': '100',
                    }
                },
                'scale-big': {
                    '0%': {
                        'transform': 'scale(0)',
                        'opacity': '0',
                    },
                    '100%': {
                        'transform': 'scale(1)',
                        'opacity': '100',
                    }
                },
                'fade-in-down': {
                    '0%': {
                        'transform': 'translateY(-20px)',
                        'opacity': '0',
                    },
                    '100%': {
                        'transform': 'translateY(0)',
                        'opacity': '100',
                    }
                },
                'fade-in-up': {
                    '0%': {
                        'transform': 'translateY(20px)',
                        'opacity': '0',
                    },
                    '100%': {
                        'transform': 'translateY(0)',
                        'opacity': '100',
                    }
                },
                'fade-in-left': {
                    '0%': {
                        'transform': 'translateX(-20px)',
                        'opacity': '0',
                    },
                    '100%': {
                        'transform': 'translateX(0)',
                        'opacity': '100',
                    }
                },
                'fade-in-right': {
                    '0%': {
                        'transform': 'translateX(20px)',
                        'opacity': '0',
                    },
                    '100%': {
                        'transform': 'translateX(0)',
                        'opacity': '100',
                    }
                }
            }
        },
    },
    plugins: [
        require('tailwindcss-animation'),
    ],
}
