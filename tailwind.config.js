module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      

        extend: {
            fontFamily: {
                'openSans': ['"Open Sans"', 'sans-serif'],
                'poppins': ['"Poppins"', 'sans-serif']
            }
        },
    },
    // daisyui: {
    //     themes: [
    //         {
    //             winter: {
    //                 ...require("daisyui/src/colors/themes")["[data-theme=winter]"],
    //                 "base-content": "black",
    //             },
    //         },
    //     ],
    // },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#770BCC",
                    secondary: "#19D3AE",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    bgWhite: "#D9D9D9",
                    "base-100": "#ffffff",
                },
        
                // extend: {
                //     fontFamily: {
                //         openSens:[ ]
                //     }
                // },
            },

        ],
    },
    plugins: [require("daisyui")],
}