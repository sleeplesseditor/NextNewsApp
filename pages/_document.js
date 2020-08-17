import Document, { Head, Main, NextScript } from "next/document";

class RevisedDocument extends Document {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="Next News"
                    />
                    <meta name="keywords" content="next news react seo" />
                    <meta name="author" content="Josh Bryson" />
                    <link rel="stylesheet" href="/static/style.css" />
                </head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default RevisedDocument;