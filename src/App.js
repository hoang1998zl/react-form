import Form from "./components/Form";
import ListSinhVien from "./components/ListSinhVien";

function App() {
  return (
    <div className="App container my-5">
      <h1 className='w-100 p-4 bg-dark text-white fw-bold'>
        Thông tin sinh viên
      </h1>
      <Form />
      <ListSinhVien />
    </div>
  );
}

export default App;
