"use client";
import { api } from "@/lib/api";
import { FormEvent } from 'react'

import { ArrowLeftComponent } from "@/components/ArrowLeftComponent";
import { NavBar } from "@/components/NavBar";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} 
from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} 
from "@/components/ui/popover";

import {useRouter} from "next/navigation";
import { title } from "process";
// import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  task: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  data: z.date({
    required_error: "A date is required.",
  }),
});

export default function TasksNew() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  const router = useRouter();
 
  async function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await api.post("/api/tasks",{title:formData.get('task'),userId:'6',created_at:formData.get('data')}
  ).then((response) => {
    // Se a requisição for bem-sucedida
    console.log('Sucesso', response.data);
  })
  .catch((error) => {
    console.error('Erro:', error);
  })
  router.push('/tasks')
  }



  return (
    <main>
      <NavBar />

      <div className="flex justify-center items-center  h-screen w-screen">
        <div className="flex flex-col justify-center items-start ">
          <span className="flex justify-center items-center gap-[18px] mb-[48px]">
            
            <ArrowLeftComponent />
            <span>
              <h1 className="font-bold text-[32px] leading-[36.67px] mb-[12px]">
                Add task
              </h1>
              <p className="font-[500] text-[18px] leading-[20.63px]">
                add your task to be registed
              </p>
            </span>
          </span>
          <Form {...form}>
            <form onSubmit={handleCreateTask} className="space-y-8">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-[500] leading-[18.34px] text-firstHex">
                      Title task
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insert your task"
                        {...field}
                        className="w-[603px] h-[60px] rounded-[6px] bg-[#363041] outline-none border-none  placeholder:text-op"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="data"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[16px] font-[500] leading-[18.34px] text-firstHex">
                      Today
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            className={cn(
                              "w-[603px] h-[60px] pl-3 text-left font-[500] bg-[#363041]",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-op">Today</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#363041] outline-none border-none "
                        align="center"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-[603px] h-[60px] rounded-[6px] bg-firstHex font-[500] text-[18px] leading-[20.63px] text-secondHex"
              >
                Create Task
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
