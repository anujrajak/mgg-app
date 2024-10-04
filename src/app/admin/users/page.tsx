 

"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";

import { toast } from "react-toastify";




const UsersList = () => {
  const [users, setUsers] = useState<{ id: number; name: string; email: string; blogsUploaded: number; joinedAt: string }[]>([]);

  

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [blogsUploaded, setBlogsUploaded] = useState<number>();
  const userModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const openModal = () => userModalRef.current?.showModal();

  const saveUser = () => {
    const newUser = {
      id: users.length + 1,
      name,
      email,
      blogsUploaded,
      joinedAt: new Date().toISOString().split("T")[0],
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast("User added successfully.", { theme: "dark" });
    closeModal();
  };

  const closeModal = () => {
    setName("");
    setEmail("");
    setBlogsUploaded(0);
    userModalRef.current?.close();
  };

  const tableHead = ["Sr. No.", "Name", "Email", "Blogs Uploaded", "Joined At"].map((title, index) => (
    <th key={index} className="border-b p-4 border-gray-200 text-center dark:border-gray-700">
      <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
        {title}
      </div>
    </th>
  ));

  return (
    <div className="p-2">
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full sm:overflow-auto px-6">
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Users List
          </div>
          <div className="relative flex">
            <button className="btn btn-primary" onClick={openModal}>
              Add User
            </button>
          </div>
        </header>

        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
          <div className="overflow-x-auto rounded-lg border dark:border-gray-700">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {tableHead}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b dark:border-gray-700">
                    <td className="pt-[14px]  pb-[16px] sm:text-[14px] text-center text-gray-900 dark:text-gray-200">{index + 1}</td>
                    <td className="pt-[14px] pb-[16px] sm:text-[14px] text-center text-gray-900 dark:text-gray-200">{user.name}</td>
                    <td className="pt-[14px] pb-[16px] sm:text-[14px] text-center text-gray-900 dark:text-gray-200">{user.email}</td>
                    <td className="pt-[14px] pb-[16px] sm:text-[14px] text-center text-gray-900 dark:text-gray-200">{user.blogsUploaded}</td>
                    <td className="pt-[14px] pb-[16px] sm:text-[14px] text-center text-gray-900 dark:text-gray-200">{new Date(user.joinedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <dialog ref={userModalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box dark:!bg-navy-800 bg-white dark:text-white dark:shadow-none">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Add New User
            </h3>
            

            <label className="form-control w-full mb-3">
              <span className="label-text">Name*</span>
              <input
                type="text"
                placeholder="Enter user name..."
                className={`input input-bordered w-full mb-3 bg-transparent text-gray-900 dark:bg-transparent dark:text-white border-slate-300 dark:border-slate-600 ${
                  name ? "input-success" : "input-error"
                }`}
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
            </label>

            <label className="form-control w-full mb-3">
              <span className="label-text">Email*</span>
              <input
                type="email"
                placeholder="Enter user email..."
                className={`input input-bordered w-full mb-3 bg-transparent text-gray-900 dark:bg-transparent dark:text-white border-slate-300 dark:border-slate-600`}
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </label>

            <label className="form-control w-full mb-3">
              <span className="label-text">Blogs Uploaded</span>
              <input
                type="number"
                placeholder="Enter number of blogs uploaded..."
                className={`input input-bordered w-full mb-3 bg-transparent text-gray-900 dark:bg-transparent dark:text-white border-slate-300 dark:border-slate-600`}
                value={blogsUploaded}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBlogsUploaded(Number(e.target.value))}
              />
            </label>

            <button
              className={`btn btn-primary rounded-xl mt-4 ${
                !name || !email ? "btn-disabled opacity-50 bg-blue-300 text-gray-600 dark:bg-blue-600 dark:text-gray-500" : "bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
              }`}
              onClick={saveUser}
              disabled={!name || !email}
            >
              Save
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};


export default UsersList;






