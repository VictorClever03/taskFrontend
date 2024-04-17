/* eslint-disable react-hooks/rules-of-hooks */
"use client";


import { NavBar } from "@/components/NavBar";
import { FormEvent } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { api } from "@/lib/api";
import { Search, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
interface Task {
  id: string;
  done: number;
  title: string;
  created_at: string;
}
export default async function tasks() {
  // todas as tarefas
  const response = await api.get("api/task");
  const tasks: Task[] = response.data;

  // deletar a tarefa
  async function handleDelete(id: String) {
    await api
      .delete(`api/task/${id}`)
      .then((response) => {
        // Se a requisição for bem-sucedida
        console.log("Sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    window.location.reload();
  }
  async function completeTask(id: String, done:number) {
    await api
      .put(`api/task/update/${id}`,{"done":done})
      .then((response) => {
        // Se a requisição for bem-sucedida
        console.log("Sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  return (
    <main>
      <NavBar />
      <div className="flex justify-center items-center  pt-[158px] pb-[50px] ">
        <div className="flex flex-col justify-center items-start ">
          <div className="flex flex-col gap-[32px] justify-center items-start mb-[44px]  ">
            <span>
              <h1 className="font-bold text-[32px] leading-[36.67px] mb-[12px]">
                My Tasks
              </h1>
              <p className="font-[500] text-[18px] leading-[20.63px]">
                Register your tasks and have a better monitoring of your
                activities
              </p>
            </span>
            <label htmlFor="search" className="">
              <div className="bg-[#363041] flex gap-[13px] items-center justify-start px-[18px] w-[1004px] h-[60px] rounded-[12px]">
                <span className="flex justify-center items-center w-[40px] h-[40px] rounded-[6px] bg-firstHex">
                  <Search />
                </span>
                <form action="">
                  <input
                    id="search"
                    type="text"
                    placeholder="find your tasks"
                    className="bg-transparent w-[900px] focus:outline-none"
                  />
                </form>
              </div>
            </label>
          </div>
          <div>
            <h3 className="font-[700] text-[24px] leading-[27.5px] mb-[22px]">
              Tasks - 2
            </h3>
            <div className="flex flex-col justify-start items-center gap-3">
              {(await tasks).map((task) => {
                if (task.done === 0) {
                  return (
                    <div
                      key={task.id}
                      className="flex justify-between items-center px-[18px] w-[1004px] h-[60px] rounded-[12px] bg-[#363041] cursor-pointer hover:filter hover:brightness-110"
                    >
                      <span className=" flex gap-[13px] items-center justify-start  ">
                        {/* <form action="" method="post"> */}

                        <button onClick={() => completeTask(task.id, 1)}>
                          <Checkbox className="border-firstHex w-[28px] h-[28px] border-2 rounded-[6px] data-[state=checked]:bg-firstHex " />
                        </button>
                        {/* </form> */}

                        <span>
                          <p className="font-[500] text-[18px] leading-[20.63px] mb-[8px] ">
                            {task.title}
                          </p>
                          <p className="text-firstHex font-bold text-[12px] leading-[13.75px]">
                            Today
                          </p>
                        </span>
                      </span>
                      {/* <form  method="post" onSubmit={}> */}
                      <button onClick={() => handleDelete(task.id)}>
                        <Trash />
                      </button>
                      {/* </form> */}
                    </div>
                  );
                }else{
                  return (
                  
                    <div
                      key={task.id}
                      className="flex justify-between items-center px-[18px] w-[1004px] h-[60px] rounded-[12px] bg-[#363041] cursor-pointer hover:filter hover:brightness-110"
                    >
                      <span className=" flex gap-[13px] items-center justify-start  ">
                        {/* <form action="" method="post"> */}
                        
                          <button
                          onClick= { ()=>completeTask(task.id, 0)}
                          >
                            <Checkbox checked className="border-firstHex w-[28px] h-[28px] border-2 rounded-[6px] data-[state=checked]:bg-firstHex " />
                          </button>
                        {/* </form> */}
  
                        <span>
                          <p className="font-[500] text-[18px] leading-[20.63px] mb-[8px] line-through">
                            {task.title}
                          </p>
                          <p className="text-firstHex font-bold text-[12px] leading-[13.75px]">
                            Today
                          </p>
                        </span>
                      </span>
                      {/* <form  method="post" onSubmit={}> */}
                        <button
                        onClick={() => handleDelete(task.id)}
                        >
                          <Trash />
                        </button>
                      {/* </form> */}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
