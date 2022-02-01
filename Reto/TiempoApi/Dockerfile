FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["TiempoApi.csproj", "./"]
RUN dotnet restore "TiempoApi.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "TiempoApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TiempoApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TiempoApi.dll"]
