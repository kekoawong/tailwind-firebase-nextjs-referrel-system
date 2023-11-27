'use client';

import SignOutButton from "@/app/components/signout-button";
import SubmitButton from "@/app/components/submit-form-button";
import { submitFormAction } from "@/app/profile/action";
import { User } from "@/types/user";
import { TextInput } from "@tremor/react";
import { z } from "zod";

/**
 * Define the form schema for zod form validation
 */
const FormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

/**
 * Main profile page form
 *
 * @export
 * @return {*} 
 */
export default function ProfileForm({ user }: { user?: Partial<User> }) {
    const formAction = submitFormAction.bind(null, user?.email);
    return (
        <form action={formAction}>
        <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
        First Name
        </label>
        <TextInput
            name="firstName"
            id="firstName"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={user?.firstName || "First Name"}
            defaultValue={user?.firstName}
        />
        <label className="block text-sm font-medium leading-6 text-gray-900 mt-2">
        Last Name
        </label>
        <TextInput
            name="lastName"
            id="lastName"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={user?.lastName || "Last Name"}
            defaultValue={user?.lastName}
        />
        <SubmitButton loadingText="Updating...">Update User</SubmitButton>
        <SignOutButton redirectURL="/" />
  </form>
    )
}