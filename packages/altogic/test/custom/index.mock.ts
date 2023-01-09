import nock from "nock";

nock("https://dev001.na-dev-engine.altogic.com:443", {
    encodedQueryParams: true,
})
    .get("/post")
    .query({ page: "1", size: "10", filter: "" })
    .reply(
        200,
        {
            result: [
                {
                    _id: "613a25eb65f2050012410a41",
                    createdAt: "2021-09-09T15:19:07.122Z",
                    updatedAt: "2021-09-17T14:12:08.705Z",
                    title: "foo",
                    categoryId: "61373e585d65d30019e2b0a2",
                    status: "draft",
                    content: "bar",
                },
                {
                    _id: "613b2d6df0091b00191270df",
                    createdAt: "2021-09-10T10:03:25.679Z",
                    updatedAt: "2021-09-10T10:03:25.679Z",
                    title: "_altogic",
                    categoryId: "61373e5e59c5a7001aeac77d",
                    status: "published",
                    content: "test",
                },
                {
                    _id: "613b3ab4f0091b001912729e",
                    createdAt: "2021-09-10T11:00:04.741Z",
                    updatedAt: "2021-09-10T11:00:04.741Z",
                    title: "published test",
                    categoryId: "61373e5e59c5a7001aeac77d",
                    status: "published",
                    content: "published",
                },
                {
                    _id: "613b80901550aa001b0a85f8",
                    createdAt: "2021-09-10T15:58:08.573Z",
                    updatedAt: "2021-09-21T07:46:10.782Z",
                    title: "Deneme1",
                    categoryId: "61373e5e59c5a7001aeac77d",
                    status: "published",
                    content: "Denem deneme 321",
                },
                {
                    _id: "613f445c1550aa001b0a8de7",
                    createdAt: "2021-09-13T12:30:20.012Z",
                    updatedAt: "2021-09-17T14:12:04.775Z",
                    title: "foo",
                    categoryId: "61373e585d65d30019e2b0a2",
                    status: "published",
                    content: "bar",
                    image: "613a13c865f20500124106ac",
                },
                {
                    _id: "613f445e97d1370019b25a60",
                    createdAt: "2021-09-13T12:30:22.976Z",
                    updatedAt: "2021-09-17T14:12:04.787Z",
                    title: "foo",
                    categoryId: "61373e585d65d30019e2b0a2",
                    status: "published",
                    content: "bar",
                    image: "613a13c865f20500124106ac",
                },
                {
                    _id: "6144a2041550aa001b0a9970",
                    createdAt: "2021-09-17T14:11:16.772Z",
                    updatedAt: "2021-09-17T14:11:16.772Z",
                    title: "foo",
                    categoryId: "61373e585d65d30019e2b0a2",
                    status: "rejected",
                    content: "bar",
                },
                {
                    _id: "6144a22f4f18c4001914f35c",
                    createdAt: "2021-09-17T14:11:59.220Z",
                    updatedAt: "2021-09-17T14:11:59.220Z",
                    title: "foo",
                    categoryId: "61373e585d65d30019e2b0a2",
                    status: "rejected",
                    content: "bar",
                },
            ],
            countInfo: {
                count: 8,
                totalPages: 1,
                currentPage: 1,
                pageSize: 10,
            },
        },
        [
            "Date",
            "Tue, 21 Sep 2021 07:59:02 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "1817",
            "Connection",
            "close",
            "X-Powered-By",
            "Altogic",
            "Access-Control-Allow-Origin",
            "*",
            "Surrogate-Control",
            "no-store",
            "Cache-Control",
            "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma",
            "no-cache",
            "Expires",
            "0",
            "Access-Control-Expose-Headers",
            "X-Service-Id, X-Duration, X-Validated-Duration, Content-Length, Content-Type, Content-Disposition, X-Powered-By",
            "X-Service-Id",
            "61373d5361cf2c001a1e27fb",
            "X-Duration",
            "6",
            "X-Validated-Duration",
            "8",
            "Strict-Transport-Security",
            "max-age=15724800; includeSubDomains",
        ],
    );
