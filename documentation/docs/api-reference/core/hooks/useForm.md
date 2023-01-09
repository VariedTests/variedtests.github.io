---
id: useForm
title: useForm
---

```tsx live shared
import React from "react";
import {
    Refine,
    LayoutProps,
    useList,
    HttpError,
    useShow,
    useNavigation,
} from "@pankod/refine-core";
import { Layout } from "components";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import routerProvider from "@pankod/refine-react-router-v6";

const { Link } = routerProvider;

type FormValues = Omit<IPost, "id">;

interface IPost {
    id: number;
    title: string;
    content: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div
            style={{
                background: "white",
                height: "100vh",
            }}
        >
            {children}
        </div>
    );
};

const PAGE_SIZE = 10;

const PostList: React.FC = () => {
    const [page, setPage] = React.useState(1);
    const { edit, create, clone } = useNavigation();

    const { data } = useList<IPost>({
        resource: "posts",
        config: {
            pagination: {
                current: page,
                pageSize: PAGE_SIZE,
            },
        },
    });

    const posts = data?.data || [];
    const toalCount = data?.total || 0;

    const pageCount = Math.ceil(toalCount / PAGE_SIZE);
    const hasNext = page * PAGE_SIZE < toalCount;
    const hasPrev = page > 1;

    return (
        <div>
            <div>
                <button onClick={() => create("posts")}>
                    <span>Create Post</span>
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            <div>ID</div>
                        </th>
                        <th>
                            <div>Title</div>
                        </th>

                        <th>
                            <div>Action</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <div>
                                    <button
                                        onClick={() => edit("posts", post.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => edit("posts", post.id)}
                                    >
                                        Clone
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <div>
                    <button onClick={() => setPage(1)} disabled={!hasPrev}>
                        First
                    </button>
                    <button
                        onClick={() => setPage((prev) => prev - 1)}
                        disabled={!hasPrev}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={!hasNext}
                    >
                        Next
                    </button>
                    <button
                        onClick={() => setPage(pageCount)}
                        disabled={!hasNext}
                    >
                        Last
                    </button>
                </div>
                <span>
                    Page{" "}
                    <strong>
                        {page} of {pageCount}
                    </strong>
                </span>
                <span>
                    Go to page:
                    <input
                        type="number"
                        defaultValue={page + 1}
                        onChange={(e) => {
                            const value = e.target.value
                                ? Number(e.target.value)
                                : 1;
                            setPage(value);
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

const PostEdit: React.FC = () => {
    const { formLoading, onFinish, queryResult } = useForm<FormValues>();
    const defaultValues = queryResult?.data?.data;

    const [formValues, seFormValues] = useState<FormValues>({
        title: defaultValues?.title || "",
        content: defaultValues?.content || "",
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        seFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish(formValues);
    };

    useEffect(() => {
        seFormValues({
            title: defaultValues?.title || "",
            content: defaultValues?.content || "",
        });
    }, [defaultValues]);

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={formValues.title}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Content"
                        rows={10}
                        value={formValues.content}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" disabled={formLoading}>
                    {formLoading && <div>Loading...</div>}
                    <span>Save</span>
                </button>
            </form>
        </div>
    );
};

const PostCreate: React.FC = () => {
    const { formLoading, onFinish } = useForm<IPost, HttpError, FormValues>();

    const [formValues, seFormValues] = useState<FormValues>({
        title: "",
        content: "",
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        seFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish(formValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={formValues.title}
                        onChange={handleOnChange}
                    />
                </div>

                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Content"
                        value={formValues.content}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" disabled={formLoading}>
                    {formLoading && <div>Loading...</div>}
                    <span>Save</span>
                </button>
            </form>
        </div>
    );
};
```

`useForm` is a hook that allows to manage forms. It has some `action` methods that `create`, `edit` and `clone` the form. The hook return value comes to according to the called action and it can run different logic depending on the `action`.

You can think of `useForm` as a bridge between your `state` and `dataProvider`. It's a low-level hook that you can use to build your own form components. It's also use `notificationProvider` to inform users according to the `action` and `dataProvider` response.

Let's review how `useForm` works behind the scenes.

<Tabs
defaultValue="create"
values={[
{label: 'create', value: 'create'},
{label: 'edit', value: 'edit'},
{label: 'clone', value: 'clone'}
]}>
<TabItem value="create">

After form is submitted:

1. `useForm` calls `onFinish` function with the form values.
2. `onFinish` function calls [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) with the form values.
3. `useCreate` calls [`dataProvider`](/docs/api-reference/core/providers/data-provider/)'s `create` function and returns the response.
4. `useForm` calls `onSuccess` or `onError` function with the response, depending on the response status.
5. `onSuccess` or `onError` function then calls the `open` function of the [`notificationProvider`](/docs/api-reference/core/providers/notification-provider/) to inform the user.
6. `useForm`, redirects to the `list` page.

</TabItem>

<TabItem value="edit">

On mount, `useForm` calls [`useGetOne`](/docs/api-reference/core/hooks/data/useOne/) hook to retrieve the record to be edited. The `id` for the record is obtained from the `URL` or `props`.

After form is submitted:

1.  `useForm` calls `onFinish` function with the form values.
2.  `onFinish` function calls [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) with the form values.
3.  `useUpdate` calls [`dataProvider`](/docs/api-reference/core/providers/data-provider/)'s `update` function and returns the response.
4.  `useForm` calls `onSuccess` or `onError` function with the response, depending on the response status.
5.  `onSuccess` or `onError` function then calls the `open` function of the [`notificationProvider`](/docs/api-reference/core/providers/notification-provider/) to inform the user.
6.  `useForm`, redirects to the `list` page.

</TabItem>

<TabItem value="clone">

On mount, `useForm` calls [`useGetOne`](/docs/api-reference/core/hooks/data/useOne/) hook to retrieve the record to be edited. The `id` for the record is obtained from the `URL` or `props`.

After form is submitted:

1.  `useForm` calls `onFinish` function with the form values.
2.  `onFinish` function calls [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) with the form values.
3.  `useUpdate` calls [`dataProvider`](/docs/api-reference/core/providers/data-provider/)'s `update` function and returns the response.
4.  `useForm` calls `onSuccess` or `onError` function with the response, depending on the response status.
5.  `onSuccess` or `onError` function then calls the `open` function of the [`notificationProvider`](/docs/api-reference/core/providers/notification-provider/) to inform the user.
6.  `useForm`, redirects to the `list` page.

</TabItem>

</Tabs>

This is the default behavior of `useForm`. You can customize it by passing your own [`redirect`](/docs/api-reference/core/hooks/useForm/#redirect), [`onFinish`](/docs/api-reference/core/hooks/useForm/##how-can-i-change-the-form-data-before-submitting-it-to-the-api), [`onMutationSuccess`](/docs/api-reference/core/hooks/useForm/#onmutationsuccess) and [`onMutationError`](/docs/api-reference/core/hooks/useForm/#onmutationerror) props.

:::info
`useForm` does not manage any state. If you're looking for a complete form library, `refine` supports three form libraries out-of-the-box.

-   [React Hook Form](https://react-hook-form.com/) (for Headless users) - [Documentation](/packages/documentation/react-hook-form/useForm.md) - [Example](/examples/form/react-hook-form/useForm.md)
-   [Ant Design Form](https://ant.design/components/form/#header) (for Ant Design users) - [Documentation](/api-reference/antd/hooks/form/useForm.md) - [Example](/examples/form/antd/useForm.md)
-   [Mantine Form](https://mantine.dev/form/use-form) (for Mantine users) - [Documentation](/api-reference/mantine/hooks/form/useForm.md) - [Example](/examples/form/mantine/useForm.md)

:::

<GeneralConceptsLink />

## Basic Usage

We'll show the basic usage of `useForm` by adding an creating form.

```tsx title="src/posts/create.tsx"
import { useState } from "react";
import { useForm } from "@pankod/refine-core";

const PostCreate = () => {
    const [title, setTitle] = useState();
    const { onFinish } = useForm({
        action: "create",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        onFinish({ title });
    };

    return (
        <form onSubmit={onSubmit}>
            <input onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};
```

-   Returns the `mutationResult` after called the `onFinish` callback.
-   Accepts generic type parameters. It is used to define response type of the mutation and query.

## Properties

### `action`

`useForm` can handle `edit`, `create` and `clone` actions.

:::tip
By default, it determines the `action` from route.

-   If the route is `/posts/create` thus the hook will be called with `action: "create"`.
-   If the route is `/posts/edit/1`, the hook will be called with `action: "edit"`.
-   If the route is `/posts/clone/1`, the hook will be called with `action: "clone"`.

It can be overridden by passing the `action` prop where it isn't possible to determine the action from the route (e.g. when using form in a modal or using a custom route).
:::

<Tabs
defaultValue="create"
values={[
{label: 'create', value: 'create'},
{label: 'edit', value: 'edit'},
{label: 'clone', value: 'clone'}
]}>
<TabItem value="create">

`action: "create"` is used for creating a new record that didn't exist before.

`useForm` uses [`useCreate`](/docs/api-reference/core/hooks/data/useCreate.md) under the hood for mutations on create mode.

In the following example, we'll show how to use `useForm` with `action: "create"`.

```tsx live  url=http://localhost:3000/posts/create previewHeight=420px
setInitialRoutes(["/posts/create"]);

// visible-block-start
import React, { useState } from "react";
import { useForm } from "@pankod/refine-core";

interface FormValues {
    id: number;
    title: string;
    content: string;
}

const PostCreatePage: React.FC = () => {
    const { formLoading, onFinish } = useForm<IPost, HttpError, FormValues>();

    const [formValues, seFormValues] = useState<FormValues>({
        title: "",
        content: "",
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        seFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish(formValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={formValues.title}
                        onChange={handleOnChange}
                    />
                </div>

                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Content"
                        value={formValues.content}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" disabled={formLoading}>
                    {formLoading && <div>Loading...</div>}
                    <span>Save</span>
                </button>
            </form>
        </div>
    );
};
// visible-block-end

setRefineProps({
    Layout: (props: LayoutProps) => <Layout {...props} />,
    resources: [
        {
            name: "posts",
            list: PostList,
            create: PostCreatePage,
            edit: PostEdit,
        },
    ],
});

render(<RefineHeadlessDemo />);
```

</TabItem>

<TabItem value="edit">

`action: "edit"` is used for editing an existing record. It requires the `id` for determining the record to edit. By default, it uses the `id` from the route. It can be changed with the `setId` function or `id` property.

It fetches the record data according to the `id` with [`useOne`](/docs/api-reference/core/hooks/data/useOne/) and returns the `queryResult` for you to fill the form. After the form is submitted, it updates the record with [`useUpdate`](/api-reference/core/hooks/data/useUpdate.md).

In the following example, we'll show how to use `useForm` with `action: "edit"`.

```tsx live  url=http://localhost:3000/edit/123 previewHeight=420px
setInitialRoutes(["/posts/edit/123"]);

// visible-block-start
import React, { useState, useEffect } from "react";
import { useForm } from "@pankod/refine-core";

interface FormValues {
    id: number;
    title: string;
    content: string;
}

const PostEditPage: React.FC = () => {
    const { formLoading, onFinish, queryResult } = useForm<FormValues>();
    const defaultValues = queryResult?.data?.data;

    const [formValues, seFormValues] = useState<FormValues>({
        title: defaultValues?.title || "",
        content: defaultValues?.content || "",
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        seFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish(formValues);
    };

    useEffect(() => {
        seFormValues({
            title: defaultValues?.title || "",
            content: defaultValues?.content || "",
        });
    }, [defaultValues]);

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={formValues.title}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Content"
                        rows={10}
                        value={formValues.content}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" disabled={formLoading}>
                    {formLoading && <div>Loading...</div>}
                    <span>Save</span>
                </button>
            </form>
        </div>
    );
};
// visible-block-end

setRefineProps({
    Layout: (props: LayoutProps) => <Layout {...props} />,
    resources: [
        {
            name: "posts",
            list: PostList,
            create: PostCreate,
            edit: PostEditPage,
        },
    ],
});

render(<RefineHeadlessDemo />);
```

</TabItem>

<TabItem value="clone">

`action: "clone"` is used for cloning an existing record. It requires the `id` for determining the record to clone. By default, it uses the `id` from the route. It can be changed with the `setId` function.

You can think `action:clone` like save as. It's similar to `action:edit` but it creates a new record instead of updating the existing one.

It fetches the record data according to the `id` with [`useOne`](/docs/api-reference/core/hooks/data/useOne/) and returns the `queryResult` for you to fill the form. After the form is submitted, it creates a new record with [`useCreate`](/docs/api-reference/core/hooks/data/useCreate.md).

In the following example, we'll show how to use `useForm` with `action: "clone"`.

```tsx live  url=http://localhost:3000/clone/123 previewHeight=420px
setInitialRoutes(["/posts/clone/123"]);

// visible-block-start
import React, { useState, useEffect } from "react";
import { useForm } from "@pankod/refine-core";

interface FormValues {
    id: number;
    title: string;
    content: string;
}

const PostCreatePage: React.FC = () => {
    const { formLoading, onFinish, queryResult } = useForm<FormValues>();
    const defaultValues = queryResult?.data?.data;

    const [formValues, seFormValues] = useState<FormValues>({
        title: defaultValues?.title || "",
        content: defaultValues?.content || "",
    });

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        seFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish(formValues);
    };

    useEffect(() => {
        seFormValues({
            title: defaultValues?.title || "",
            content: defaultValues?.content || "",
        });
    }, [defaultValues]);

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={formValues.title}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Content"
                        rows={10}
                        value={formValues.content}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" disabled={formLoading}>
                    {formLoading && <div>Loading...</div>}
                    <span>Save</span>
                </button>
            </form>
        </div>
    );
};
// visible-block-end

setRefineProps({
    Layout: (props: LayoutProps) => <Layout {...props} />,
    resources: [
        {
            name: "posts",
            list: PostList,
            create: PostCreatePage,
            edit: PostEdit,
        },
    ],
});

render(<RefineHeadlessDemo />);
```

</TabItem>

</Tabs>

### `resource`

**refine** passes the `resource` to the `dataProvider` as a params. This parameter is usually used to as a API endpoint path. It all depends on how to handle the `resource` in your `dataProvider`. See the [`creating a data provider`](/api-reference/core/providers/data-provider.md#creating-a-data-provider) section for an example of how `resource` are handled.

The `resource` value is determined from the active route where the component or the hook is used. It can be overridden by passing the `resource` prop.

Use case for overriding the `resource` prop:

-   We can create a `category` from the `<PostEdit>` page.
-   We can edit a `category` from the `<PostEdit>` page.

In the following example, we'll show how to use `useForm` with `resource` prop.

```tsx title="src/posts/edit.tsx"
import { useState } from "react";
import { useForm } from "@pankod/refine-core";
import { PostForm } from "./PostForm";

const PostEdit = () => {
    return (
        <div>
            <PostForm />
            <CategoryForm />
        </div>
    );
};

const CategoryForm = () => {
    const [title, setTitle] = useState("");

    // highlight-start
    const { onFinish } = useForm({
        action: "create",
        resource: "categories",
    });
    // highlight-end

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFinish({ title });
        setTitle("");
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <label htmlFor="categoryTitle">Category Title</label>
            <input
                id="categoryTitle"
                onChange={(e) => setTitle(e.currentTarget.value)}
                placeholder="Category Title"
            />
            <button type="submit">Create Category</button>
        </form>
    );
};
```

Also you can give URL path to the `resource` prop.

```tsx
const form = useForm({
    action: "create",
    resource: "categories/subcategory", // <BASE_URL_FROM_DATA_PROVIDER>/categories/subcategory
});
```

### `id`

`id` is used for determining the record to `edit` or `clone`. By default, it uses the `id` from the route. It can be changed with the `setId` function or `id` property.

It is usefull when you want to `edit` or `clone` a `resource` from a different page.

> Note: `id` is required when `action: "edit"` or `action: "clone"`.

```tsx
const form = useForm({
    action: "edit", // or clone
    resource: "categories",
    id: 1, // <BASE_URL_FROM_DATA_PROVIDER>/categories/1
});
```

### `redirect`

`redirect` is used for determining the page to redirect after the form is submitted. By default, it uses the `list`. It can be changed with the `redirect` property.

It can be set to `"show" | "edit" | "list" | "create"` or `false` to prevent the page from redirecting to the list page after the form is submitted.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    redirect: false,
});
```

### `onMutationSuccess`

It's a callback function that will be called after the mutation is successful.

It receives the following parameters:

-   `data`: Returned value from [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) or [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) depending on the `action`.
-   `variables`: The variables passed to the mutation.
-   `context`: react-query context.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    onMutationSuccess: (data, variables, context) => {
        console.log({ data, variables, context });
    },
});
```

### `onMutationError`

It's a callback function that will be called after the mutation is failed.

It receives the following parameters:

-   `data`: Returned value from [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) or [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) depending on the `action`.
-   `variables`: The variables passed to the mutation.
-   `context`: react-query context.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    onMutationError: (data, variables, context) => {
        console.log({ data, variables, context });
    },
});
```

### `invalidates`

You can use it to manage the invalidations that will occur at the end of the mutation.

By default it's invalidates following queries from the current `resource`:

-   on `"create"` or `"clone"` mode: `"list"` and `"many"`
-   on `"edit"` mode: `"list"`", `"many"` and `"detail"`

```tsx title="src/posts/create.tsx"
const form = useForm({
    invalidates: ["list", "many", "detail"],
});
```

### `dataProviderName`

If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.
It is useful when you want to use a different `dataProvider` for a specific resource.

:::tip
If you want to use a different `dataProvider` on all resource pages, you can use the [`dataProvider` prop ](docs/api-reference/core/components/refine-config/#dataprovidername) of the `<Refine>` component.
:::

```tsx title="src/posts/edit.tsx"
const form = useForm({
    dataProviderName: "second-data-provider",
});
```

### `mutationMode`

Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: `pessimistic`, `optimistic` and `undoable`. Default mode is `pessimistic`.
Each mode corresponds to a different type of user experience.

> For more information about mutation modes, please check [Mutation Mode documentation](/docs/advanced-tutorials/mutation-mode) page.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    action: "edit",
    resource: "categories",
    mutationMode: "undoable", // "pessimistic" | "optimistic" | "undoable",
});
```

### `successNotification`

> [`NotificationProvider`][notification-provider] is required.

After form is submitted successfully, `useForm` will call `open` function from [`NotificationProvider`][notification-provider] to show a success notification. With this prop, you can customize the success notification.

```tsx title="src/posts/create.tsx"
const form = useForm({
    successNotification: (data, values, resource) => {
        return {
            message: `Post Successfully created with ${data.title}`,
            description: "Success with no errors",
            type: "success",
        };
    },
});
```

### `errorNotification`

> [`NotificationProvider`][notification-provider] is required.

After form is submit is failed, `useForm` will call `open` function from [`NotificationProvider`][notification-provider] to show a success notification. With this prop, you can customize the success notification.

```tsx title="src/posts/create.tsx"
const form = useForm({
    action: "create",
    resource: "post",
    errorNotification: (data, values, resource) => {
        return {
            message: `Something went wrong when deleting ${data.id}`,
            description: "Error",
            type: "error",
        };
    },
});
```

```json title="Default values"
{
    "message": "Error when updating <resource-name> (status code: ${err.statusCode})" or "Error when creating <resource-name> (status code: ${err.statusCode})",
    "description": "Error",
    "type": "error",
}
```

### `metaData`

[`metaData`](/docs/api-reference/general-concepts/#metadata) is used following two purposes:

-   To pass additional information to data provider methods.
-   Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer [GraphQL](/docs/advanced-tutorials/data-provider/graphql/#edit-page) for more information.

In the following example, we pass the `headers` property in the `metaData` object to the `create` method. With similar logic, you can pass any properties to specifically handle the data provider methods.

```tsx title="src/posts/create.tsx"
const form = useForm({
    // highlight-start
    metaData: {
        headers: { "x-meta-data": "true" },
    },
    // highlight-end
});

const myDataProvider = {
    //...
    // highlight-start
    create: async ({ resource, variables, metaData }) => {
        const headers = metaData?.headers ?? {};
        // highlight-end
        const url = `${apiUrl}/${resource}`;

        // highlight-next-line
        const { data } = await httpClient.post(url, variables, { headers });

        return {
            data,
        };
    },
    //...
};
```

### `queryOptions`

> Works only in `action: "edit"` or `action: "clone"` mode.

in `edit` or `clone` mode, **refine** uses [`useOne`](/docs/api-reference/core/hooks/data/useOne/) hook to fetch data. You can pass [`queryOptions`](https://tanstack.com/query/v4/docs/react/reference/useQuery) options by passing `queryOptions` property.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    // highlight-start
    queryOptions: {
        retry: 3,
    },
    // highlight-end
});
```

### `createMutationOptions`

> This option is only available when `action: "create"` or `action: "clone"`.

In `create` or `clone` mode, **refine** uses [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) hook to create data. You can pass [`mutationOptions`](https://tanstack.com/query/v4/docs/react/reference/useMutation) by passing `createMutationOptions` property.

```tsx title="src/posts/create.tsx"
const form = useForm({
    // highlight-start
    createMutationOptions: {
        retry: 3,
    },
    // highlight-end
});
```

### `updateMutationOptions`

> This option is only available when `action: "edit"`.

In `edit` mode, **refine** uses [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) hook to update data. You can pass [`mutationOptions`](https://tanstack.com/query/v4/docs/react/reference/useMutation) by passing `updateMutationOptions` property.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    // highlight-start
    updateMutationOptions: {
        retry: 3,
    },
    // highlight-end
});
```

### `liveMode`

Whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.
For more information about live mode, please check [Live / Realtime](/docs/api-reference/core/providers/live-provider/#livemode) page.

```tsx title="src/posts/edit.tsx"
const form = useForm({
    // highlight-start
    liveMode: "auto",
    // highlight-end
});
```

## Return Values

### `queryResult`

If the `action` is set to `"edit"` or `"clone"` or if a `resource` with an `id` is provided, `useForm` will call [`useOne`](/docs/api-reference/core/hooks/data/useOne/) and set the returned values as the `queryResult` property.

```tsx title="src/posts/edit.tsx"
const { queryResult } = useForm();

const { data } = queryResult;
```

### `mutationResult`

When in `"create"` or `"clone"` mode, `useForm` will call [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/). When in `"edit"` mode, it will call [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) and set the resulting values as the `mutationResult` property."

```tsx title="src/posts/edit.tsx"
const { mutationResult } = useForm();

const { data } = mutationResult;
```

### `setId`

`useForm` determine `id` from the router. If you want to change the `id` dynamically, you can use `setId` function.

```tsx title="src/posts/edit.tsx"
const { id, setId } = useForm();

const handleIdChange = (id: string) => {
    setId(id);
};

return (
    <div>
        <input value={id} onChange={(e) => handleIdChange(e.target.value)} />
    </div>
);
```

### `redirect`

"By default, after a successful mutation, `useForm` will `redirect` to the `"list"` page. To redirect to a different page, you can either use the `redirect` function to programmatically specify the destination, or set the redirect [property](/docs/api-reference/core/hooks/useForm/#redirect) in the hook's options.

In the following example we will redirect to the `"show"` page after a successful mutation.

```tsx title="src/posts/create.tsx"
const { onFinish, redirect } = useForm();

// --

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await onFinish(formValues);
    redirect("show", data?.data?.id);
};

// --
```

### `onFinish`

`onFinish` is a function that is called when the form is submitted. It will call the appropriate mutation based on the `action` property.
You can override the default behavior by passing an `onFinish` function in the hook's options.

For example you can [change values before sending to the API](/docs/api-reference/core/hooks/useForm/#how-can-i-change-the-form-data-before-submitting-it-to-the-api).

## FAQ

### How can Invalidate other resources?

You can invalidate other resources with help of [`useInvalidate`](/docs/api-reference/core/hooks/invalidate/useInvalidate/) hook.

It is useful when you want to `invalidate` other resources don't have relation with the current resource.

```tsx title="src/posts/edit.tsx"
import { useInvalidate, useForm } from "@pankod/refine-core";

const PostEdit = () => {
    const invalidate = useInvalidate();

    const form = useForm({
        // highlight-start
        onMutationSuccess: (data, variables, context) => {
            invalidate({
                resource: "users",
                invalidates: ["resourceAll"],
            });
        },
        // highlight-end
    });

    // ---
    // ---
};
```

### How can I change the form data before submitting it to the API?

You may need to modify the form data before it is sent to the API.

For example, Let's send the values we received from the user in two separate inputs, `name` and `surname`, to the API as `fullName`.

```tsx title="src/users/create.tsx"
import React, { useState } from "react";
import { useForm } from "@pankod/refine-core";

export const UserCreate: React.FC = () => {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();

    const { onFinish } = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
        const fullName = `${name} ${surname}`;
        onFinish({
            fullName: fullName,
            name,
            surname,
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <input onChange={(e) => setName(e.target.value)} />
            <input onChange={(e) => setSurname(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};
```

## API Reference

### Properties

<PropsTable module="@pankod/refine-core/useForm" />

> `*`: These props have default values in `RefineContext` and can also be set on **<[Refine](/api-reference/core/components/refine-config.md)>** component. `useForm` will use what is passed to `<Refine>` as default but a local value will override it.

### Type Parameters

| Property   | Desription                                                       | Default                    |
| ---------- | ---------------------------------------------------------------- | -------------------------- |
| TData      | Result data of the query that extends [`BaseRecord`][baserecord] | [`BaseRecord`][baserecord] |
| TError     | Custom error object that extends [`HttpError`][httperror]        | [`HttpError`][httperror]   |
| TVariables | Values for params.                                               | `{}`                       |

### Return values

| Property       | Description                                            | Type                                                                                                                                                           |
| -------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onFinish       | Triggers the mutation                                  | `(values: TVariables) => Promise<CreateResponse<TData>` \| `UpdateResponse<TData>` \| `void`>                                                                  |
| queryResult    | Result of the query of a record                        | [`QueryObserverResult<T>`](https://react-query.tanstack.com/reference/useQuery)                                                                                |
| mutationResult | Result of the mutation triggered by calling `onFinish` | [`UseMutationResult<T>`](https://react-query.tanstack.com/reference/useMutation)                                                                               |
| formLoading    | Loading state of form request                          | `boolean`                                                                                                                                                      |
| id             | Record id for `clone` and `create` action              | [`BaseKey`](/api-reference/core/interfaces.md#basekey)                                                                                                         |
| setId          | `id` setter                                            | `Dispatch<SetStateAction<` `string` \| `number` \| `undefined>>`                                                                                               |
| redirect       | Redirect function for custom redirections              | (redirect: `"list"`\|`"edit"`\|`"show"`\|`"create"`\| `false` ,idFromFunction?: [`BaseKey`](/api-reference/core/interfaces.md#basekey)\|`undefined`) => `data` |

[baserecord]: /api-reference/core/interfaces.md#baserecord
[httperror]: /api-reference/core/interfaces.md#httperror

## Example

<StackblitzExample path="form-core-use-form" />

[notification-provider]: /docs/api-reference/core/providers/notification-provider/