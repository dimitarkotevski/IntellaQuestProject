USE [ShopDb]
GO
INSERT [dbo].[Payments] ([Id], [PaymentType], [CardNumber], [ExpirationDate], [SecurityCode], [FirstName], [LastName], [City], [BillingAdress], [ZipPostalCode], [Country], [PhoneNumber]) VALUES (N'55e0049c-daf9-4b0c-88b6-86f8a68a2d7a', 1, N'111', CAST(N'2023-05-05' AS Date), N'11', N'Dimitar', N'Kotevski', N'aaa', N'aaaa', N'aaaa', N'aaa', N'aaa')
GO
