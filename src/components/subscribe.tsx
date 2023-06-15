'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from './react-hook-form/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '../utils/use-toast';

const FormSchema = z.object({
	email: z.string().min(1),
});

type FormData = z.infer<typeof FormSchema>;

export const Subscribe: React.FC = () => {
	const form = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	});

	async function onSubmit(data: FormData) {
		await fetch('/api/mailchimp/', {
			method: 'POST',
			body: JSON.stringify(data.email),
		}).then((res) => console.log(res));

		return toast({
			title: 'Check your email',
			description:
				'We sent you a login link. Be sure to check your spam too.',
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 flex flex-col items-center"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									className="text-white text-md w-72 h-12"
									id="email"
									placeholder="t1@faker.com"
									type="email"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect="off"
									{...form.register('email')}
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button
					className="flex items-center w-72 h-12 rounded-sm bg-white hover:bg-white/90"
					type="submit"
				>
					<p className="font-semibold text-black text-lg">
						Stay tuned
					</p>
				</Button>
			</form>
		</Form>
	);
};
