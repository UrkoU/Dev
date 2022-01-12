FROM mcr.microsoft.com/dotnet
COPY bin/Release/net5.0/publish/ App/
WORKDIR /App
ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]