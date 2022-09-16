USE [master]
GO
/****** Object:  Database [Api]    Script Date: 16/9/2022 11:15:46 ******/
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
/****** Object:  User [alumno]    Script Date: 16/9/2022 11:15:46 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [admin]    Script Date: 16/9/2022 11:15:46 ******/
CREATE USER [admin] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[admin]
GO
ALTER ROLE [db_owner] ADD MEMBER [alumno]
GO
/****** Object:  Table [dbo].[Mascota]    Script Date: 16/9/2022 11:15:46 ******/
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
/****** Object:  Table [dbo].[Postulaciones]    Script Date: 16/9/2022 11:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Postulaciones](
	[IdPostulacion] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[IdMascota] [int] NOT NULL,
	[Aceptado] [bit] NULL,
 CONSTRAINT [PK_Postulaciones] PRIMARY KEY CLUSTERED 
(
	[IdPostulacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 16/9/2022 11:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[IdPregunta] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](256) NOT NULL,
 CONSTRAINT [PK_Formulario] PRIMARY KEY CLUSTERED 
(
	[IdPregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Raza]    Script Date: 16/9/2022 11:15:46 ******/
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
/****** Object:  Table [dbo].[Refugio]    Script Date: 16/9/2022 11:15:46 ******/
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
/****** Object:  Table [dbo].[Respuestas]    Script Date: 16/9/2022 11:15:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[IdRespuesta] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](256) NOT NULL,
	[IdPregunta] [int] NOT NULL,
	[IdPostulacion] [int] NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[IdRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 16/9/2022 11:15:46 ******/
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
SET IDENTITY_INSERT [dbo].[Mascota] ON 

INSERT [dbo].[Mascota] ([IdMascota], [Nombre], [Edad], [Estado], [IdRefugio], [Foto], [IdRaza], [Castrado]) VALUES (6, N'Pepita', 2, N'Bien/Estable', 1, N'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/07/20/1012478.jpg', 1, 1)
INSERT [dbo].[Mascota] ([IdMascota], [Nombre], [Edad], [Estado], [IdRefugio], [Foto], [IdRaza], [Castrado]) VALUES (7, N'Frufri', 8, N'Fracturada pata derecha', 3, N'https://cdn.stamped.io/uploads/photos/12459_704127959106_5223f145_8a2c_431e_ac25_290f606eb9d7.jpg', 2, 0)
INSERT [dbo].[Mascota] ([IdMascota], [Nombre], [Edad], [Estado], [IdRefugio], [Foto], [IdRaza], [Castrado]) VALUES (9, N'Tuki', 1, N'Moquillo', 2, N'https://demascotas.info/wp-content/uploads/2017/10/dog_maltese_thoroughbred_white_fur_small_dog_animal_pet-601920.jpg', 3, 1)
INSERT [dbo].[Mascota] ([IdMascota], [Nombre], [Edad], [Estado], [IdRefugio], [Foto], [IdRaza], [Castrado]) VALUES (11, N'Pelucita', 6, N'Bien/Estable', 1, N'https://media.elestimulo.com/2020/12/golden2.jpg', 4, 1)
SET IDENTITY_INSERT [dbo].[Mascota] OFF
GO
SET IDENTITY_INSERT [dbo].[Postulaciones] ON 

INSERT [dbo].[Postulaciones] ([IdPostulacion], [IdUsuario], [IdMascota], [Aceptado]) VALUES (1, 2, 6, NULL)
INSERT [dbo].[Postulaciones] ([IdPostulacion], [IdUsuario], [IdMascota], [Aceptado]) VALUES (2, 2, 7, NULL)
SET IDENTITY_INSERT [dbo].[Postulaciones] OFF
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (1, N'¿Cuántos son en tu familia?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (2, N'¿Están todos de acuerdo en adoptar?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (3, N'¿Cómo son sus horarios, rutina?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (4, N'¿En qué zona vivís?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (5, N'¿Vivís en casa o departamento?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (6, N'Si es departamento, ¿tenés patio o balcón?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (7, N'Si es casa, ¿tu mascota dormía adentro o afuera?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (8, N'¿Tendrías con quién dejarlo si te fueras de vacaciones?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (9, N'¿Te gusta salir a caminar?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (10, N'¿Dónde duermen/dormirían las mascotas en tu casa?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (11, N'¿Tenés otras mascotas?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (12, N'Si tenés, ¿se llevan bien con otros animales?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (13, N'¿Está permitido tener animales donde vivís?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (14, N'¿tengo los recursos para cuidarlo y darle atención veterinaria si lo necesita?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (15, N'¿El lugar en donde vivo está cerrado y es seguro para tu mascota?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (16, N'¿Qué opinas sobre la castración?')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (17, N'¿Estarías de acuerdo en castrar cumplidos los 8 meses de edad?
')
INSERT [dbo].[Preguntas] ([IdPregunta], [Descripcion]) VALUES (18, N'¿Tus mascotas están castradas?')
SET IDENTITY_INSERT [dbo].[Preguntas] OFF
GO
SET IDENTITY_INSERT [dbo].[Raza] ON 

INSERT [dbo].[Raza] ([IdRaza], [Nombre]) VALUES (1, N'Rottweiler')
INSERT [dbo].[Raza] ([IdRaza], [Nombre]) VALUES (2, N'Caniche Toy')
INSERT [dbo].[Raza] ([IdRaza], [Nombre]) VALUES (3, N'Maltés')
INSERT [dbo].[Raza] ([IdRaza], [Nombre]) VALUES (4, N'Golden')
SET IDENTITY_INSERT [dbo].[Raza] OFF
GO
SET IDENTITY_INSERT [dbo].[Refugio] ON 

INSERT [dbo].[Refugio] ([IdRefugio], [Nombre], [Telefono], [Email], [Password], [Foto], [Direccion]) VALUES (1, N'Patitas Al Rescate', N'1132371409', N'patitas@gmail.com', N'patitas1234', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0_x16i0OvA0amlyrthfC3zUxJo7Mt54lKyExpTVVdTj9PiE8GO-KP8JJhpFaoEUUFfI&usqp=CAU', N'Av. Gral Paz 8342')
INSERT [dbo].[Refugio] ([IdRefugio], [Nombre], [Telefono], [Email], [Password], [Foto], [Direccion]) VALUES (2, N'Patitas Glew', N'1550152504', N'patitasglew@gmail.com', N'glew436', N'https://d1kvlp4er3agpe.cloudfront.net/resources/images/groups/2/3/0/3/2/vb0kvmdcqv.jpg', N'Av. Córdoba 2423')
INSERT [dbo].[Refugio] ([IdRefugio], [Nombre], [Telefono], [Email], [Password], [Foto], [Direccion]) VALUES (3, N'SentimientoAnimal', N'1139578371', N'sanimal@gmail.com', N'sanimal83562', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLby3YGqcOwODiKgBFoKaZo5jwffQeKkL_qtNiesK9f8QSFbYSqgHe10dY5FFf2Wl8YT8&usqp=CAU', N'Lavalle 423')
SET IDENTITY_INSERT [dbo].[Refugio] OFF
GO
SET IDENTITY_INSERT [dbo].[Respuestas] ON 

INSERT [dbo].[Respuestas] ([IdRespuesta], [Descripcion], [IdPregunta], [IdPostulacion]) VALUES (2, N'Sí', 1, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Descripcion], [IdPregunta], [IdPostulacion]) VALUES (3, N'No', 2, 2)
SET IDENTITY_INSERT [dbo].[Respuestas] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([IdUsuario], [TipoUsuario], [Nombre], [Apellido], [Email], [Password], [IdRefugio]) VALUES (1, 1, N'Jade', N'Arevalos', N'jade.arevort@gmail.com', N'CuentaMascotas', 1)
INSERT [dbo].[Usuario] ([IdUsuario], [TipoUsuario], [Nombre], [Apellido], [Email], [Password], [IdRefugio]) VALUES (2, 1, N'Uriel', N'Cherni', N'uricherni@gmail.com', N'UriCherniii', NULL)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
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
ALTER TABLE [dbo].[Postulaciones]  WITH CHECK ADD  CONSTRAINT [FK_Postulaciones_Mascotas] FOREIGN KEY([IdMascota])
REFERENCES [dbo].[Mascota] ([IdMascota])
GO
ALTER TABLE [dbo].[Postulaciones] CHECK CONSTRAINT [FK_Postulaciones_Mascotas]
GO
ALTER TABLE [dbo].[Postulaciones]  WITH CHECK ADD  CONSTRAINT [FK_Postulaciones_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[Postulaciones] CHECK CONSTRAINT [FK_Postulaciones_Usuario]
GO
ALTER TABLE [dbo].[Respuestas]  WITH CHECK ADD  CONSTRAINT [FK_Respuestas_Postulaciones] FOREIGN KEY([IdRespuesta])
REFERENCES [dbo].[Respuestas] ([IdRespuesta])
GO
ALTER TABLE [dbo].[Respuestas] CHECK CONSTRAINT [FK_Respuestas_Postulaciones]
GO
ALTER TABLE [dbo].[Respuestas]  WITH CHECK ADD  CONSTRAINT [FK_Respuestas_Respuestas] FOREIGN KEY([IdRespuesta])
REFERENCES [dbo].[Respuestas] ([IdRespuesta])
GO
ALTER TABLE [dbo].[Respuestas] CHECK CONSTRAINT [FK_Respuestas_Respuestas]
GO
USE [master]
GO
ALTER DATABASE [Api] SET  READ_WRITE 
GO
