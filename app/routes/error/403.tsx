export function meta() {
    return [{ title: "403 - Forbidden" }];
  }
  
  export default function ForbiddenPage() {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">403</h1>
        <p className="text-lg mt-2">You don’t have permission to access this page.</p>
        <a href="/" className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded hover:bg-blue-700">
          Go to Home
        </a>
      </div>
    );
  }
  