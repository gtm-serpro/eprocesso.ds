import Button from "./ui/Button"; // ✅ Import Button component

export default function Header() {
  return (
    <header className="bg-pure-0 w-full py-4 fixed top-0 left-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Branding */}
        <Button as="a" to="/" variant="tertiary" className="text-xl font-bold">
          e-processo
        </Button>

        {/* Navigation Links */}
        <nav className="flex gap-4">
          <Button as="a" to="/" variant="tertiary" size="sm">
            Home
          </Button>
          <Button as="a" to="/profile" variant="tertiary" size="sm">
            Profile
          </Button>
          <Button as="a" to="/admin" variant="tertiary" size="sm">
            Admin
          </Button>
          <Button as="a" to="/reports" variant="tertiary" size="sm">
            Reports
          </Button>
        </nav>
      </div>
    </header>
  );
}
