import { Component, type ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="editorial-section min-h-screen flex items-center">
          <div className="section-shell" role="alert">
            <p className="section-kicker">Career Maps</p>
            <h1 className="section-title">We couldn’t load this page.</h1>
            <p className="section-intro mt-6">Please try again. You can also contact our team at contact@careermaps.com.</p>
            <a href="/" className="mt-6 inline-block font-semibold underline underline-offset-4">Reload the website</a>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

const App = () => (
  <AppErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AppErrorBoundary>
);

export default App;
