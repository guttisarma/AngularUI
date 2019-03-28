Select * from InlineTranscat

Alter table InlineTranscat
Alter column Amount money not null

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


--3/22/2019