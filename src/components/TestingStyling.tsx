import { useState } from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";


function TestingStyling() {
    const message: string = "Testing text";
    const formatBlock = "flex flex-col bg-accent rounded-md p-5";
    const [choice, setChoice] = useState("3");

    return (
      <div className="flex page-holder">
        Debugging Page to Test Styling
        <div className="flex flex-row">
        <p className="main-content-text">
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline">Settings</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Testing Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={choice} onValueChange={setChoice}>
                <DropdownMenuRadioItem value={"1"}>
                    One Column
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value={"2"}>
                    Two Columns
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value={"3"}>
                    Three Columns
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
            <DropdownMenuItem>
                <p className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>P</DropdownMenuShortcut>
            </DropdownMenuItem>
            </DropdownMenuGroup>
    </DropdownMenuContent>
    </DropdownMenu>
        </p>
        </div>
        <Separator />
        <div className={`grid grid-cols-${choice} gap-5 p-5`}>
            <div className={formatBlock}>
                <h1>Testing Reg text</h1>
                <Separator className="bg-accent-foreground mt-5 mb-5"/>
                <h2>Header level 2</h2>
                <h3>Header level 3</h3>
                <p>{message} from p attribute</p>
                <p className="main-content-text"> {message} from main text css</p>
            </div>
            <div className={formatBlock}>
                <h1>Testing Card</h1>
                <Separator className="bg-accent-foreground mt-5 mb-5"/>
            <Card>
                <CardTitle>
                    Title
                </CardTitle>
                <CardHeader>
                    Header
                </CardHeader>
                <CardContent>
                    {message} for card content
                </CardContent>
                <CardFooter>
                    Footer
                </CardFooter>
                <CardDescription>
                    Description
                </CardDescription>
            </Card>
            </div>
            <div className={formatBlock}/>
        </div>
    </div>)
}

export default TestingStyling;