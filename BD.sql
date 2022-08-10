USE [master]
GO
/****** Object:  Database [Api]    Script Date: 9/8/2022 23:36:50 ******/
CREATE DATABASE [Api]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Api', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Api.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Api_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Api_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Api] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Api].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Api] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Api] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Api] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Api] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Api] SET ARITHABORT OFF 
GO
ALTER DATABASE [Api] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Api] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Api] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Api] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Api] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Api] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Api] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Api] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Api] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Api] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Api] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Api] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Api] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Api] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Api] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Api] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Api] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Api] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Api] SET  MULTI_USER 
GO
ALTER DATABASE [Api] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Api] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Api] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Api] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Api] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Api] SET QUERY_STORE = OFF
GO
USE [Api]
GO
/****** Object:  User [alumnos]    Script Date: 9/8/2022 23:36:51 ******/
CREATE USER [alumnos] FOR LOGIN [alumnos] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Formulario]    Script Date: 9/8/2022 23:36:51 ******/
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
/****** Object:  Table [dbo].[Mascota]    Script Date: 9/8/2022 23:36:51 ******/
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
/****** Object:  Table [dbo].[Raza]    Script Date: 9/8/2022 23:36:51 ******/
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
/****** Object:  Table [dbo].[Refugio]    Script Date: 9/8/2022 23:36:51 ******/
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
/****** Object:  Table [dbo].[Respuestas]    Script Date: 9/8/2022 23:36:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[IdRespuesta] [int] IDENTITY(1,1) NOT NULL,
	[IdFormulario] [int] NOT NULL,
	[Descripcion] [varchar](256) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[IdMascota] [int] NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[IdRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 9/8/2022 23:36:51 ******/
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
USE [master]
GO
ALTER DATABASE [Api] SET  READ_WRITE 
GO
