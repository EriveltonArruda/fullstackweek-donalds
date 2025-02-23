"use client"

import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { isValidCpf } from "../contexts/helpers/cptf";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PatternFormat } from 'react-number-format';

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'O nome é obrigatório.'
  }),
  cpf: z.string().trim().min(1, {
    message: 'O CPF é obrigatório.'
  }).refine((value) => isValidCpf(value), {
    message: "CPF Inválido.",
  })
});

type formSchema = z.infer<typeof formSchema>

interface FinishOrderDialogProps {
  open: boolean,
  onOpenChange: (open: boolean) => void;
}

const FisnishOrderDialog = ({ open, onOpenChange }: FinishOrderDialogProps) => {
  const form = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
    },
    shouldUnregister: true,
  });

  const onSubmit = (data: formSchema) => {
    console.log({ data });
  }
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Finalizar pedido</DrawerTitle>
          <DrawerDescription>Insira suas informações abaixo para finalizar seu pedido.</DrawerDescription>
        </DrawerHeader>
        <div className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu cpf</FormLabel>
                    <FormControl>
                      <PatternFormat placeholder="Digite seu CPF..." format="###.###.###-##" customInput={Input}
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter>
                <Button type="submit" variant="destructive" className="rounded-full">Finalizar</Button>
                <DrawerClose asChild>
                  <Button className="w-full rounded-full" variant="outline">Cancelar</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>

      </DrawerContent>
    </Drawer>
  );
}

export default FisnishOrderDialog;