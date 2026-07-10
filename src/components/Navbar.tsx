import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-5xl mx-auto items-center justify-between px-8">

                {/* Logo / Nombre a la izquierda */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold inline-block">
                            O. Rojas
                        </span>
                    </Link>
                    {/* Enlaces de navegación principales */}
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-primary text-foreground/60">
                            Inicio
                        </Link>
                        <Link href="#destacados" className="transition-colors hover:text-primary text-foreground/60">
                            Destacados
                        </Link>
                        <Link href="#contacto" className="transition-colors hover:text-primary text-foreground/60">
                            Contacto
                        </Link>
                    </nav>
                </div>

                {/* Botones de acción a la derecha */}
                <div className="flex items-center justify-end space-x-2">
                    <Link
                        href="https://github.com/OscarRojasG"
                        target="_blank"
                        className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                        GitHub
                    </Link>
                    <Link
                        href="#contacto"
                        className={buttonVariants({ size: "sm" })}
                    >
                        Contacto
                    </Link>
                    <ModeToggle />
                </div>

            </div>
        </header>
    );
}