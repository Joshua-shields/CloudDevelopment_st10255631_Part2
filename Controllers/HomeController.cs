using CloudDevelopment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CloudDevelopment.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var products = productTable.GetAllProducts();

            ViewData["Products"] = products;



            return View();
        }

    public IActionResult About()
        {
            return View();  
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult MyWork()
        {
            return View();
        }

        public IActionResult ContactUs()
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }

        public IActionResult Result()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
