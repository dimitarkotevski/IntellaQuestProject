USE [ShopDb]
GO
INSERT [dbo].[Orders] ([Id], [OrderName], [UserId], [ShoppingCartId], [PaymentType], [OrderStatus], [TotalAmount], [DateCreated]) VALUES (N'b14a5b01-ab59-4372-b969-b05d00cd19cc', N'Order#11111', N'2e55cd2e-be62-4f0c-80af-eb262b097758', N'8922d672-5917-4166-901c-4e587e8e0317', 0, 1, CAST(1000 AS Decimal(38, 0)), CAST(N'2023-08-13T14:26:44.723' AS DateTime))
INSERT [dbo].[Orders] ([Id], [OrderName], [UserId], [ShoppingCartId], [PaymentType], [OrderStatus], [TotalAmount], [DateCreated]) VALUES (N'a39b93e8-16b1-474d-80fa-b05d00f5f489', N'Order#11111', N'3c4c1cf3-4ca6-4acc-8072-b05d00ecad37', N'91a83fb9-548a-4ed6-8ab9-b05d00ecba1b', 0, 1, CAST(1125 AS Decimal(38, 0)), CAST(N'2023-08-13T16:55:29.443' AS DateTime))
GO
