"use client";

import { useCreateCategory, useFetchCategories } from "@/utils/api/categoryApi";
import { ChangeEvent, useRef, useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { toast } from "react-toastify";

export default function CategoryPage() {
  const [name, setName] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");

  const categoryModalRef = useRef();
  const { data, isLoading } = useFetchCategories();
  const { mutateAsync, isLoading: saveInProgress } = useCreateCategory();

  const openModal = () => categoryModalRef?.current?.showModal();

  const saveCategory = async () => {
    try {
      await mutateAsync({
        name,
        parentCategory: parentName,
      });
      toast("Category added successfully.", { theme: "dark" });
    } catch (error) {
      toast("Error", { theme: "dark" });
    } finally {
    }
  };

  const updateParentName = (event: ChangeEvent) =>
    setParentName(event?.target?.value);

  const updateName = (event: ChangeEvent) => setName(event?.target?.value);

  const tabbleHead = ["#", "Name", "Description", "Type", "Parent Category", "Created At"].map(
    (title, i) => (
      <th
        key={`title-${i}`}
        role="columnheader"
        className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
        style={{ cursor: "pointer" }}
      >
        <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
          {title}
        </div>
      </th>
    )
  );

  return (
    <div className="p-2">
      <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full h-full sm:overflow-auto px-6">
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Categories Table
          </div>
          <div className="relative flex">
            <div className="flex">
              <div className="dropdown dropdown-end">
                <button className="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200">
                  <PiDotsThreeOutlineFill />
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white dark:bg-navy-800 rounded-box z-[1] w-52 p-2 shadow dark:shadow-lg"
                >
                  <li>
                    <button
                      className="btn btn-ghost flex justify-start font-xl w-full"
                      onClick={openModal}
                    >
                      New Category
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
          {isLoading ? (
            <div className="flex flex-1 items-center justify-center">
              <span className="loading loading-spinner loading-lg text-blue-500 dark:text-blue-400"></span>
            </div>
          ) : (
            <table role="table" className="w-full" color="gray-500">
              <thead>
                <tr role="row">{tabbleHead}</tr>
              </thead>
              <tbody role="rowgroup">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (data || []).map((row: any, i: number) => (
                    <tr role="row" key={`${row.name}-category`}>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px] text-gray-900 dark:text-gray-200"
                      >
                        {i + 1}
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px] text-gray-900 dark:text-gray-200"
                      >
                        {row.name}
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px] text-gray-900 dark:text-gray-200"
                      >
                        {row.description}
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px] text-gray-900 dark:text-gray-200"
                      >
                        {
                            row?.parentCategory?.name ? <div className="badge badge-secondary badge-outline">Child</div> : <div className="badge badge-primary badge-outline">Parent</div>
                        } 
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px] text-gray-900 dark:text-gray-200"
                      >
                        {
                            row?.parentCategory?.name ? <div style={{textTransform: 'capitalize'}} className="badge badge-warning">{row?.parentCategory?.name}</div> : ''
                        } 
                      </td>
                      <td
                        role="cell"
                        className="pt-[14px] pb-[16px] sm:text-[14px] text-gray-900 dark:text-gray-200"
                      >
                        {row.createdAt}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )}
        </div>
      </div>

      <dialog
        ref={categoryModalRef}
        id="new-category-modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box dark:!bg-navy-800 bg-white dark:text-white dark:shadow-none">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Add New Category
          </h3>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name*</span>
            </div>
            <input
              placeholder="Enter category name..."
              id="categoryName"
              type="text"
              onChange={updateName}
              value={name}
              className={`input input-bordered w-full mb-3 bg-transparent text-gray-900 dark:bg-transparent dark:text-white border-slate-300 dark:border-slate-600 ${
                name ? "input-success" : "input-error"
              }`}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Parent Name</span>
            </div>
            {/* <input
              placeholder="Enter parent category name..."
              id="parentCategoryName"
              type="text"
              onChange={updateParentName}
              value={parentName}
              className="input input-bordered w-full mb-3 bg-transparent text-gray-900 dark:bg-transparent dark:text-white border-slate-300 dark:border-slate-600"
            /> */}
            <select
              onChange={updateParentName}
              id="parentCategoryName"
              value={parentName}
              className="select select-bordered w-full mb-3 bg-transparent text-gray-900 dark:bg-transparent dark:text-white border-slate-300 dark:border-slate-600">
              <option>None</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </label>

          <button
            className={`btn btn-primary ${
              !name
                ? "btn-disabled opacity-50 bg-blue-300 text-gray-600 dark:bg-blue-600 dark:text-gray-500"
                : "bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
            } rounded-xl mt-4`}
            onClick={saveCategory}
            disabled={!name} // Disable the button if name is falsy
          >
            {saveInProgress ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Save"
            )}
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
