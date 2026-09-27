export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] py-6 text-center text-xs text-[var(--color-on-dark-soft)] border-t border-[var(--color-border-dark)]">
      © {new Date().getFullYear()} Irfan Khalil. All rights reserved.
    </footer>
  );
}