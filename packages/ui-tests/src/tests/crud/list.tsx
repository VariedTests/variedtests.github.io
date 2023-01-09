import React from "react";
import { AccessControlProvider } from "@pankod/refine-core";
import { Route, Routes } from "react-router-dom";
import {
    RefineCrudListProps,
    RefineButtonTestIds,
} from "@pankod/refine-ui-types";

import { act, ITestWrapperProps, render, TestWrapper, waitFor } from "@test";

const renderList = (
    list: React.ReactNode,
    accessControlProvider?: AccessControlProvider,
    wrapperProps?: ITestWrapperProps,
) => {
    return render(
        <Routes>
            <Route path="/:resource" element={list} />
        </Routes>,
        {
            wrapper: TestWrapper(
                wrapperProps
                    ? wrapperProps
                    : {
                          routerInitialEntries: ["/posts"],
                          accessControlProvider,
                      },
            ),
        },
    );
};

export const crudListTests = function (
    List: React.ComponentType<RefineCrudListProps<any, any, any, any, any, {}>>,
): void {
    describe("[@pankod/refine-ui-tests] Common Tests / CRUD List", () => {
        beforeAll(() => {
            jest.spyOn(console, "warn").mockImplementation(jest.fn());
        });

        it("should render children", async () => {
            const { getByText } = renderList(
                <List key="posts">
                    <div>No Data</div>
                </List>,
            );

            getByText("No Data");
        });

        it("should render optional title with title prop", async () => {
            const { getByText } = renderList(<List title="New Title"></List>);

            getByText("New Title");
        });

        it("should render with label instead of resource name successfully", async () => {
            const { getByText } = renderList(<List />, undefined, {
                resources: [
                    {
                        name: "posts",
                        options: { route: "posts", label: "test" },
                    },
                ],
                routerInitialEntries: ["/posts"],
            });

            getByText("Tests");
        });

        it("should render create button", async () => {
            const { queryByTestId } = renderList(<List />, undefined, {
                resources: [
                    {
                        name: "posts",
                        create: () => null,
                    },
                ],
                routerInitialEntries: ["/posts"],
            });

            expect(
                queryByTestId(RefineButtonTestIds.CreateButton),
            ).not.toBeNull();
        });

        it("should not render create button on resource#canCreate=false", async () => {
            const { queryByTestId } = renderList(<List />, undefined, {
                resources: [
                    {
                        name: "posts",
                        canCreate: false,
                    },
                ],
                routerInitialEntries: ["/posts"],
            });

            expect(queryByTestId(RefineButtonTestIds.CreateButton)).toBeNull();
        });

        it("should render create button on resource#canCreate=false & props#createButtonProps!=null", async () => {
            const { getByText, queryByTestId } = renderList(
                <List createButtonProps={{ "aria-label": "Create Button" }} />,
                undefined,
                { routerInitialEntries: ["/posts"] },
            );

            expect(
                queryByTestId(RefineButtonTestIds.CreateButton),
            ).not.toBeNull();

            getByText("Posts");
        });

        it("should not render create button on resource#canCreate=true & props#canCreate=false", async () => {
            const { queryByTestId } = renderList(
                <List canCreate={false} />,
                undefined,
                {
                    resources: [
                        {
                            name: "posts",
                            create: () => null,
                        },
                    ],
                    routerInitialEntries: ["/posts"],
                },
            );

            expect(queryByTestId(RefineButtonTestIds.CreateButton)).toBeNull();
        });

        it("should render create button on resource#canCreate=false & props#canCreate=true", async () => {
            const { queryByTestId } = renderList(
                <List canCreate={true} />,
                undefined,
                {
                    resources: [
                        {
                            name: "posts",
                        },
                    ],
                    routerInitialEntries: ["/posts"],
                },
            );

            expect(
                queryByTestId(RefineButtonTestIds.CreateButton),
            ).not.toBeNull();
        });

        it("should render disabled create button if user doesn't have permission", async () => {
            const { queryByTestId } = renderList(<List canCreate={true} />, {
                can: ({ action }) => {
                    switch (action) {
                        case "create":
                            return Promise.resolve({ can: false });
                        default:
                            return Promise.resolve({ can: false });
                    }
                },
            });

            await waitFor(() =>
                expect(
                    queryByTestId(RefineButtonTestIds.CreateButton),
                ).toBeDisabled(),
            );
        });
    });
};
