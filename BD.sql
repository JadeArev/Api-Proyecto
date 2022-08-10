USE [Api]
GO
/****** Object:  User [alumnos]    Script Date: 9/8/2022 21:56:55 ******/
CREATE USER [alumnos] FOR LOGIN [alumnos] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [alumnos]
GO
/****** Object:  Table [dbo].[Formulario]    Script Date: 9/8/2022 21:56:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Formulario](
	[IdFormulario] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](256) NOT NULL,
 CONSTRAINT [PK_Formulario] PRIMARY KEY CLUSTERED 
(
	[IdFormulario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mascota]    Script Date: 9/8/2022 21:56:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mascota](
	[IdMascota] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
	[Edad] [int] NOT NULL,
	[Estado] [varchar](128) NOT NULL,
	[IdRefugio] [int] NOT NULL,
	[Foto] [varchar](128) NOT NULL,
	[IdRaza] [int] NOT NULL,
	[Castrado] [bit] NOT NULL,
 CONSTRAINT [PK_Mascota] PRIMARY KEY CLUSTERED 
(
	[IdMascota] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Raza]    Script Date: 9/8/2022 21:56:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Raza](
	[IdRaza] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](64) NOT NULL,
 CONSTRAINT [PK_Razas] PRIMARY KEY CLUSTERED 
(
	[IdRaza] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Refugio]    Script Date: 9/8/2022 21:56:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Refugio](
	[IdRefugio] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
	[Telefono] [varchar](32) NOT NULL,
	[Email] [varchar](64) NOT NULL,
	[Password] [varchar](64) NOT NULL,
	[Foto] [varchar](512) NOT NULL,
	[Direccion] [varchar](128) NOT NULL,
 CONSTRAINT [PK_Refugios] PRIMARY KEY CLUSTERED 
(
	[IdRefugio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 9/8/2022 21:56:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[IdRespuesta] [int] NOT NULL,
	[IdFormulario] [int] NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[IdMascota] [int] NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[IdRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 9/8/2022 21:56:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[TipoUsuario] [bit] NOT NULL,
	[Nombre] [varchar](32) NOT NULL,
	[Apellido] [varchar](64) NOT NULL,
	[Email] [varchar](128) NOT NULL,
	[Password] [varchar](64) NOT NULL,
	[IdRefugio] [int] NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Mascota]  WITH CHECK ADD  CONSTRAINT [FK_Mascotas_Razas] FOREIGN KEY([IdRaza])
REFERENCES [dbo].[Raza] ([IdRaza])
GO
ALTER TABLE [dbo].[Mascota] CHECK CONSTRAINT [FK_Mascotas_Razas]
GO
ALTER TABLE [dbo].[Mascota]  WITH CHECK ADD  CONSTRAINT [FK_Mascotas_Refugios] FOREIGN KEY([IdRefugio])
REFERENCES [dbo].[Refugio] ([IdRefugio])
GO
ALTER TABLE [dbo].[Mascota] CHECK CONSTRAINT [FK_Mascotas_Refugios]
GO
