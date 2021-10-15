using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.IO;
namespace HttpEcho
{
    class HttpEchoProgram
    {
        static void Main(string[] args)
        {
            TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);
            server.Start();
            Console.WriteLine("Waiting for Client...");
            TcpClient newConn = server.AcceptTcpClient();
            IPEndPoint iep = (IPEndPoint)(newConn.Client.RemoteEndPoint);
            IPAddress add = iep.Address;
            int prt = iep.Port;
            Console.WriteLine("Connected with a client: {0}: {1} ", add, prt);
            NetworkStream stream = newConn.GetStream();
            StreamReader sr = new StreamReader(stream);
            StreamWriter sw = new StreamWriter(stream);
            sw.WriteLine("HTTP/1.1 200 OK");
            sw.WriteLine("Content-Type: text/plain");
            //sw.WriteLine("Content-Length: size");
            sw.WriteLine();
            String line = null;
            while ((line = sr.ReadLine()).Length != 0)
            {
                Console.WriteLine(line);
                sw.WriteLine(line);
                sw.Flush();
            }
            newConn.Close();
            server.Stop();
        }
    }
}