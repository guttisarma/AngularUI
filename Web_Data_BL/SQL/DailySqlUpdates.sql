Select * from InlineTranscat

Alter table InlineTranscat
Alter column Amount money not null

Alter Table ProductAssignment
add AssignmentProdPID BIGINT NULL

Create table InlineTranscatType
(
InlineTranscatTypePID Bigint Identity(1,1) not null,
Name Nvarchar(50) Not Null,
Description Nvarchar(256) Null
)
Alter table InlineTranscatType
Add constraint pk_InlineTranscatType Primary key (InlineTranscatTypePID)
Alter Table InlineTranscat 
add InlineTranscatTypePID BIGINT NOT NULL
Alter table InlineTranscat
add constraint FK_InlineTranscat_InlineTranscatType FOREIGN KEY (InlineTranscatTypePID) References InlineTranscatType(InlineTranscatTypePID) 
Insert InlineTranscatType (Name) values ('Created')
Insert InlineTranscatType (Name) values ('Assign')
Insert InlineTranscatType (Name) values ('Convert')
Alter table InlineTranscat
Alter column ProductPID BIGINT NULL

Create Table AssignmentProd
(
AssignmentProdPID BIGINT IDENTITY(1,1) NOT NULL,
ProductPID BIGINT NOT NULL,
Quantity BIGINT ,
ProductAssignmentPID Bigint
)
Alter table AssignmentProd
ADD Constraint PK_AssignmentProd PRIMARY Key (AssignmentProdPID)

Alter table AssignmentProd
add constraint FK_AssignmentProd_ProductAssignment FOREIGN KEY (ProductAssignmentPID) References ProductAssignment(ProductAssignmentPID) 

Alter table AssignmentProd
add constraint FK_AssignmentProd_Product FOREIGN KEY (ProductPID) References Product(ProductPID) 

Alter table ProductAssignment
add constraint FK_ProductAssignment_AssignmentProd FOREIGN KEY (AssignmentProdPID) References AssignmentProd(AssignmentProdPID) 

Alter table ProductAssignment
Drop constraint FK_ProductAssignment_ProductPID
ALter Table ProductAssignment
Drop column ProductPID
ALter Table ProductAssignment
Drop column Quantity
Alter Table ProductAssignment
Add AdvanceAmount money null
Alter Table ProductAssignment
Add TotalAmount money null

Alter Table ProductConvert
Add AdvanceAmount money null
Alter Table ProductConvert
Add TotalAmount money null

Alter table UserDetail
Add ProductCreationPer Decimal 

Alter table UserDetail
Add ProductAssignPer Decimal 

Alter table UserDetail
Add ProductConvertPer Decimal 

ALTER Table AssignmentProd
ADD RemQuanity BIGINT

create table SupportConverted
(
SupportConvertedPID bigint identity(1,1) not null,
ProductPID bigint not null,
ProductConvertPID bigint not null,
QuanityUsed BIGINT
)
GO
Alter table SupportConverted
Add constraint pk_SupportConverted Primary key (SupportConvertedPID)
GO
Alter table SupportConverted
add constraint FK_SupportConverted_Product FOREIGN KEY (ProductPID) References Product(ProductPID) 
GO
Alter table SupportConverted
add constraint FK_SupportConverted_ProductConvert FOREIGN KEY (ProductConvertPID) References ProductConvert(ProductConvertPID)
GO
--3/22/2019

GO

IF NOT EXISTS (select * from  sys.objects where type='v' and name='ProDetailAssignView')
begin

Declare @SqlText Nvarchar(max);
set @SqlText='create View ProDetailAssignView As 
select AssignmentProd.Quantity As Quantity,ProductAssignment.ProductCode As Code,
ProductAssignment.CreatedOn As CreatedOn,UserDetail.FirstName+'' ''+UserDetail.LastName as AssignedUser  from AssignmentProd 
inner join ProductAssignment on ProductAssignment.ProductAssignmentPID=AssignmentProd.ProductAssignmentPID
inner join UserDetail on ProductAssignment.AssignedUserPID =UserDetail.UserdetailPID'
execute sp_executeSQl @SqlText;
end


--7/17/2019
GO

IF NOT EXISTS (select * from  sys.objects where type='v' and name='ProductConvertView')
begin

Declare @SqlText Nvarchar(max);
set @SqlText='create View ProductConvertView As 
select 
AssignedUserPid as UserPID,
Product.ProductPID as ProductPID,
UserDetail.FirstName+'' ''+UserDetail.LastName as AssigneeUserFullName, 
Product.ProductName as ProductName,
Product.Code as ProductCode,
AssignmentProd.RemQuanity as AvailableQuantity ,
CreatedOn.FirstName+'' ''+CreatedOn.LastName as AssignedUserFullName 
from ProductAssignment 
inner join AssignmentProd on ProductAssignment.ProductAssignmentPID=AssignmentProd.ProductAssignmentPID
inner join Product on Product.productPid=AssignmentProd.productPid
inner join UserDetail on UserDetail.UserDetailPID=AssignedUserPid
inner join UserDetail as CreatedOn on CreatedOn.UserdetailPID=ProductAssignment.CreatedUserPID'
execute sp_executeSQl @SqlText;
end

GO
Insert UserDetail (FirstName,MiddleName,LastName,DateofBirth,IsActive,IsAdmin,IsApproved)
values('Admin','Admin','Admin','1900-1-1',1,1,1)
GO

Insert Users (Username,FirstName,LastName,Email,isactive,UserCode,ActivationCode,password)
values('Admin','Admin','Admin','Admin@admin.in',1,'Admin',newID(),'HuqjUPvrwrb2e6JORAwZ84mbsZZIclGkCz810EWLn9k=')

update UD   set UD.UserPID=u.UserId from Userdetail UD inner join Users U on UD.Firstname=U.FirstName
GO