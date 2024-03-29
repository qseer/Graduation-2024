import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';

export default function LoginForm() {
    // const success = 0
  async function createInvoice(formData) {
    'use server';
    // console.log(formData);
    const rawFormData = {
      postContent: formData.get('content'),
      postImage: formData.get('image'),
      userId: formData.get('userId'),
    };
    console.log(rawFormData);
    const URL = rawFormData.postImage;
    // return 0
    const check = fetch(URL)
      .then((response) => {
        if (!response.ok) {
                // window.alert('图片获取失败，请检查URL');
          throw new Error('图片获取失败，请检查URL');
        }
        console.log('图片获取成功');
        fetch('http://182.92.130.40:8087/pub/posts/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(rawFormData),
        }).then((response) => {
          if (!response.ok) {
            throw new Error('图片上传失败');
          }
        //   console.log(response);
          console.log('图片上传成功');
        });
        // return response.blob();
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error,
        );
      });
    //   console.log(check)
    // mutate data
    // revalidate cache
  }
  return (
    <form className="space-y-3" action={createInvoice}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please input your post information.
        </h1>
        <div className="w-full">
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="userId"
            >
              userId
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="text"
                name="userId"
                placeholder="Enter your userId, recommend 4"
                required
                // minLength={6}
              />
              {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="content"
            >
              Content
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                // type="email"
                name="content"
                placeholder="enter your content"
                required
              />
              {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="image"
            >
              Image path
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="url"
                name="image"
                placeholder="Enter your image path"
                required
                minLength={6}
              />
              {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Submit
      {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
    </Button>
  );
}
