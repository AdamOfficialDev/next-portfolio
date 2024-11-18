// components/ui/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Container({
  children,
  className = "",
  id,
}: ContainerProps) {
  return (
    <section
      id={id}
      className={`w-full px-4 py-16 sm:px-6 lg:px-8 mx-auto max-w-7xl ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
