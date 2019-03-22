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
--3/22/2019