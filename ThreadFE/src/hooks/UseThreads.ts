// import { API } from "../lib/api";
// import { GET_THREADS } from "../stores/rootReducer";
// import { RootState } from "../stores/types/RootState";
// import { useSelector, useDispatch } from "react-redux";
// import { ChangeEvent, FormEvent, useEffect, useRef, useState, useCallback } from "react";

// interface FormValues {
//   content: string;
//   image: File | null;
// }

// export function useThreads() {
//     const dispatch = useDispatch();
//     const threads = useSelector((state: RootState) => state.thread);
//     const [form, setForm] = useState<FormValues>({
//       content: "",
//       image: null,
//     });
  
//     const getThreads = useCallback(async () => {
//       try {
//         const response = await API.get("/thread"); // Pastikan endpoint ini benar
//         dispatch(GET_THREADS(response.data));
//       } catch (error) {
//         console.log("gagal mengambil data threads: ", error);
//       }
//     }, [dispatch]);

//   async function handlePost(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     try {
//       if (form.image) {
//         const formData = new FormData();
//         formData.append("content", form.content);
//         formData.append("image", form.image);

//         const response = await API.post("/thread/create", formData);
//         console.log("berhasil menambahkan thread", response);
//       }
//     } catch (error) {
//       console.log('jancoknya :', error);
//     }
//   }

//   useEffect(() => {
//     getThreads();
//   }, []);

//   function handleChange(event: ChangeEvent<HTMLInputElement>) {
//     const { name, value, files } = event.target;

//     if (files) {
//       setForm({
//         ...form,
//         [name]: files[0],
//       });
//     } else {
//       setForm({
//         ...form,
//         [name]: value,
//       });
//     }
//   }

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   function handleButtonClick() {
//     fileInputRef.current?.click();
//   }

//   return { handleChange, handlePost, fileInputRef, handleButtonClick, threads };
// }
