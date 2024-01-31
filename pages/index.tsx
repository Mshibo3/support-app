import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
      }}>
    <h1 style={{ textAlign: 'center' }}>My Support App</h1>
    <form className="login-form" style={{ display: 'flex', flexDirection: 'column' }} >
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <div style={{ marginBottom: '15px' }}>
       <button type="submit" style={{ display: 'block', backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
       </div>
       <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Don't have an account? <Link href="Signup">Sign up</Link>
        </p>
        </div>
        
      </form>
      </div>
      </div>
  </Layout>
  
 

);

export default IndexPage;
