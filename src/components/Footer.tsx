export function Footer() {
    return (
        <footer className="w-full border-t bg-background mt-24">
            <div className="container flex flex-col md:flex-row max-w-5xl mx-auto items-center justify-between py-8 px-8 text-sm text-muted-foreground">

                {/* Izquierda: Copyright y Afiliación */}
                <div className="flex flex-col space-y-1 text-center md:text-left mb-4 md:mb-0">
                    <p className="font-medium text-foreground">
                        © {new Date().getFullYear()} Oscar Rojas.
                    </p>
                    <p className="text-xs">
                        Escuela de Ingeniería Informática • PUCV
                    </p>
                </div>

                {/* Derecha: Créditos de Tecnología */}
                <div className="flex flex-col text-center md:text-right space-y-1">
                    <p>
                        Construido con <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">Next.js</a> y <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">shadcn/ui</a>.
                    </p>
                    <p className="text-xs">
                        Desplegado en Vercel.
                    </p>
                </div>

            </div>
        </footer>
    );
}