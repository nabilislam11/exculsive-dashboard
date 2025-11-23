import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"

// This is sample data.
const data = {
  // versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  versions: ["1"],
  navMain: [
    {
      title: "Product",
      url: "#",
      items: [
        {
          title: "Create Product",
          url: "/createproduct",
        },
        {
          title: "ALl Product",
          url: "/get-allproduct",
        },
      ],
    },
    {
      title: "Category",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Create Category ",
          url: "/createcategory",
        },
        {
          title: "All Category",
          url: "/allcategory",

        },

      ],
    },
    {
      title: "Sub Categroy",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Create SubCategory ",
          url: "/create-subcategory",
        },
        {
          title: "All SubCategory ",
          url: "/get-allsubcategory",
        },
        {
          title: "Update SubCategory ",
          url: "/update-subcategory/:id",
        },


      ],
    },

  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link to={item.url}>{item.title}</Link>
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
  );
}
