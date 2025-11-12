import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
    if (process.env.NODE_ENV === 'production') {
      // Example: logErrorToService(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          margin: '2rem auto',
          maxWidth: '600px'
        }}>
          <h2 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
            🚫 Something went wrong
          </h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ 
              textAlign: 'left', 
              backgroundColor: '#fff', 
              padding: '1rem', 
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '1rem' }}>
                Error Details (Development Mode)
              </summary>
              <pre style={{ 
                backgroundColor: '#f8f8f8', 
                padding: '0.5rem',
                fontSize: '0.8rem',
                overflow: 'auto',
                whiteSpace: 'pre-wrap'
              }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}

          <div>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                marginRight: '1rem'
              }}
            >
              Refresh Page
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;