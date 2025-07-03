import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { supabase } from "./api/supabaseClient";

function App() {
  // const testUpload = async () => {
  //   const file = new File(['Hello Supabase!'], 'test.txt', { type: 'text/plain' });

  //   const { data, error } = await supabase.storage
  //     .from('product-images')
  //     .upload('test.txt', file);

  //   if (error) {
  //     console.error('❌ Upload error', error);
  //     alert(`Upload failed: ${error.message}`);
  //   } else {
  //     console.log('✅ Upload success!', data);
  //     alert('Upload successful!');
  //   }
  // };

  // return (
  //   <div style={{ padding: '2rem' }}>
  //     <h1>Test Supabase Upload</h1>
  //     <button onClick={testUpload}>Upload Test File</button>
  //   </div>
  // );
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
