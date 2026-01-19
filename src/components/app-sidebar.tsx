"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/src/components/ui/sidebar"

import { adminRoutes } from "@/src/routes/adminRoutes"
import { userRoutes } from "@/src/routes/userRoutes"
import { Route } from "@/src/types/routes.type"



export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>
}) {
  let routes:Route[] = []

  switch (user.role) {
    case "admin":
      routes = adminRoutes
      break
    case "user":
      routes = userRoutes
      break
    default:
      routes = []
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
  <SidebarHeader>
    <SidebarMenu>
      {routes.map((group) => (
        <SidebarMenuItem key={group.title}>
          <div className="px-2 py-1 text-sm font-semibold opacity-70">
            {group.title}
          </div>

          {group.items?.map((item) => (
            <SidebarMenuButton asChild key={item.title}>
              <a href={item.url} className="flex items-center gap-2 pl-4">
               
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          ))}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  </SidebarHeader>

  <SidebarContent>
   
  </SidebarContent>

  <SidebarFooter>
  
  </SidebarFooter>
</Sidebar>
  )
}