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
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/src/components/ui/sidebar"

import { adminRoutes } from "@/src/routes/adminRoutes"
import { userRoutes } from "@/src/routes/userRoutes"
import { Route } from "@/src/types/routes.type"
import { Roles } from "../constants/roles"
import Link from "next/link"



export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>
}) {

    if (!user || !user.role) {
    return null // or a skeleton loader
  }

  

  let routes:Route[] = []

   console.log('route',routes);
   console.log('user....', user.role);

  switch (user.role) {
    case Roles.admin:
      routes = adminRoutes
      break
    case Roles.user:
      routes = userRoutes
      break
    default:
      routes = []
      break;
  }

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}