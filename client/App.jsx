function App() {
  return (
    <div className='App'>
      <Navbar /> {/* Include the Navbar */}
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='fabrics' element={<Fabrics />} />

      </Routes>
    </div>
  );
}

export default App;