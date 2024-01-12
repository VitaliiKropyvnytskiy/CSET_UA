import { M as Q, L as q } from "./config-0b7a4e7d.js";
function tt(X, B) {
  for (var R = 0; R < B.length; R++) {
    const M = B[R];
    if (typeof M != "string" && !Array.isArray(M)) {
      for (const T in M)
        if (T !== "default" && !(T in X)) {
          const o = Object.getOwnPropertyDescriptor(M, T);
          o && Object.defineProperty(X, T, o.get ? o : {
            enumerable: !0,
            get: () => M[T]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(X, Symbol.toStringTag, { value: "Module" }));
}
var V = {}, et = {
  get exports() {
    return V;
  },
  set exports(X) {
    V = X;
  }
}, k = {}, rt = {
  get exports() {
    return k;
  },
  set exports(X) {
    k = X;
  }
}, Z = {}, it = {
  get exports() {
    return Z;
  },
  set exports(X) {
    Z = X;
  }
}, $;
function nt() {
  return $ || ($ = 1, function(X, B) {
    (function(M, T) {
      X.exports = T();
    })(Q, function() {
      return (
        /******/
        function(R) {
          var M = {};
          function T(o) {
            if (M[o])
              return M[o].exports;
            var e = M[o] = {
              /******/
              i: o,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return R[o].call(e.exports, e, e.exports, T), e.l = !0, e.exports;
          }
          return T.m = R, T.c = M, T.i = function(o) {
            return o;
          }, T.d = function(o, e, t) {
            T.o(o, e) || Object.defineProperty(o, e, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: t
              /******/
            });
          }, T.n = function(o) {
            var e = o && o.__esModule ? (
              /******/
              function() {
                return o.default;
              }
            ) : (
              /******/
              function() {
                return o;
              }
            );
            return T.d(e, "a", e), e;
          }, T.o = function(o, e) {
            return Object.prototype.hasOwnProperty.call(o, e);
          }, T.p = "", T(T.s = 26);
        }([
          /* 0 */
          /***/
          function(R, M, T) {
            function o() {
            }
            o.QUALITY = 1, o.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, o.DEFAULT_INCREMENTAL = !1, o.DEFAULT_ANIMATION_ON_LAYOUT = !0, o.DEFAULT_ANIMATION_DURING_LAYOUT = !1, o.DEFAULT_ANIMATION_PERIOD = 50, o.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, o.DEFAULT_GRAPH_MARGIN = 15, o.NODE_DIMENSIONS_INCLUDE_LABELS = !1, o.SIMPLE_NODE_SIZE = 40, o.SIMPLE_NODE_HALF_SIZE = o.SIMPLE_NODE_SIZE / 2, o.EMPTY_COMPOUND_NODE_SIZE = 40, o.MIN_EDGE_LENGTH = 1, o.WORLD_BOUNDARY = 1e6, o.INITIAL_WORLD_BOUNDARY = o.WORLD_BOUNDARY / 1e3, o.WORLD_CENTER_X = 1200, o.WORLD_CENTER_Y = 900, R.exports = o;
          },
          /* 1 */
          /***/
          function(R, M, T) {
            var o = T(2), e = T(8), t = T(9);
            function i(g, n, d) {
              o.call(this, d), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = d, this.bendpoints = [], this.source = g, this.target = n;
            }
            i.prototype = Object.create(o.prototype);
            for (var h in o)
              i[h] = o[h];
            i.prototype.getSource = function() {
              return this.source;
            }, i.prototype.getTarget = function() {
              return this.target;
            }, i.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, i.prototype.getLength = function() {
              return this.length;
            }, i.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, i.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, i.prototype.getLca = function() {
              return this.lca;
            }, i.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, i.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, i.prototype.getOtherEnd = function(g) {
              if (this.source === g)
                return this.target;
              if (this.target === g)
                return this.source;
              throw "Node is not incident with this edge";
            }, i.prototype.getOtherEndInGraph = function(g, n) {
              for (var d = this.getOtherEnd(g), r = n.getGraphManager().getRoot(); ; ) {
                if (d.getOwner() == n)
                  return d;
                if (d.getOwner() == r)
                  break;
                d = d.getOwner().getParent();
              }
              return null;
            }, i.prototype.updateLength = function() {
              var g = new Array(4);
              this.isOverlapingSourceAndTarget = e.getIntersection(this.target.getRect(), this.source.getRect(), g), this.isOverlapingSourceAndTarget || (this.lengthX = g[0] - g[2], this.lengthY = g[1] - g[3], Math.abs(this.lengthX) < 1 && (this.lengthX = t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = t.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, i.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = t.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, R.exports = i;
          },
          /* 2 */
          /***/
          function(R, M, T) {
            function o(e) {
              this.vGraphObject = e;
            }
            R.exports = o;
          },
          /* 3 */
          /***/
          function(R, M, T) {
            var o = T(2), e = T(10), t = T(13), i = T(0), h = T(16), g = T(4);
            function n(r, l, s, c) {
              s == null && c == null && (c = l), o.call(this, c), r.graphManager != null && (r = r.graphManager), this.estimatedSize = e.MIN_VALUE, this.inclusionTreeDepth = e.MAX_VALUE, this.vGraphObject = c, this.edges = [], this.graphManager = r, s != null && l != null ? this.rect = new t(l.x, l.y, s.width, s.height) : this.rect = new t();
            }
            n.prototype = Object.create(o.prototype);
            for (var d in o)
              n[d] = o[d];
            n.prototype.getEdges = function() {
              return this.edges;
            }, n.prototype.getChild = function() {
              return this.child;
            }, n.prototype.getOwner = function() {
              return this.owner;
            }, n.prototype.getWidth = function() {
              return this.rect.width;
            }, n.prototype.setWidth = function(r) {
              this.rect.width = r;
            }, n.prototype.getHeight = function() {
              return this.rect.height;
            }, n.prototype.setHeight = function(r) {
              this.rect.height = r;
            }, n.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, n.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, n.prototype.getCenter = function() {
              return new g(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, n.prototype.getLocation = function() {
              return new g(this.rect.x, this.rect.y);
            }, n.prototype.getRect = function() {
              return this.rect;
            }, n.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, n.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, n.prototype.setRect = function(r, l) {
              this.rect.x = r.x, this.rect.y = r.y, this.rect.width = l.width, this.rect.height = l.height;
            }, n.prototype.setCenter = function(r, l) {
              this.rect.x = r - this.rect.width / 2, this.rect.y = l - this.rect.height / 2;
            }, n.prototype.setLocation = function(r, l) {
              this.rect.x = r, this.rect.y = l;
            }, n.prototype.moveBy = function(r, l) {
              this.rect.x += r, this.rect.y += l;
            }, n.prototype.getEdgeListToNode = function(r) {
              var l = [], s = this;
              return s.edges.forEach(function(c) {
                if (c.target == r) {
                  if (c.source != s)
                    throw "Incorrect edge source!";
                  l.push(c);
                }
              }), l;
            }, n.prototype.getEdgesBetween = function(r) {
              var l = [], s = this;
              return s.edges.forEach(function(c) {
                if (!(c.source == s || c.target == s))
                  throw "Incorrect edge source and/or target";
                (c.target == r || c.source == r) && l.push(c);
              }), l;
            }, n.prototype.getNeighborsList = function() {
              var r = /* @__PURE__ */ new Set(), l = this;
              return l.edges.forEach(function(s) {
                if (s.source == l)
                  r.add(s.target);
                else {
                  if (s.target != l)
                    throw "Incorrect incidency!";
                  r.add(s.source);
                }
              }), r;
            }, n.prototype.withChildren = function() {
              var r = /* @__PURE__ */ new Set(), l, s;
              if (r.add(this), this.child != null)
                for (var c = this.child.getNodes(), v = 0; v < c.length; v++)
                  l = c[v], s = l.withChildren(), s.forEach(function(L) {
                    r.add(L);
                  });
              return r;
            }, n.prototype.getNoOfChildren = function() {
              var r = 0, l;
              if (this.child == null)
                r = 1;
              else
                for (var s = this.child.getNodes(), c = 0; c < s.length; c++)
                  l = s[c], r += l.getNoOfChildren();
              return r == 0 && (r = 1), r;
            }, n.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == e.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, n.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, n.prototype.scatter = function() {
              var r, l, s = -i.INITIAL_WORLD_BOUNDARY, c = i.INITIAL_WORLD_BOUNDARY;
              r = i.WORLD_CENTER_X + h.nextDouble() * (c - s) + s;
              var v = -i.INITIAL_WORLD_BOUNDARY, L = i.INITIAL_WORLD_BOUNDARY;
              l = i.WORLD_CENTER_Y + h.nextDouble() * (L - v) + v, this.rect.x = r, this.rect.y = l;
            }, n.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var r = this.getChild();
                if (r.updateBounds(!0), this.rect.x = r.getLeft(), this.rect.y = r.getTop(), this.setWidth(r.getRight() - r.getLeft()), this.setHeight(r.getBottom() - r.getTop()), i.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var l = r.getRight() - r.getLeft(), s = r.getBottom() - r.getTop();
                  this.labelWidth > l && (this.rect.x -= (this.labelWidth - l) / 2, this.setWidth(this.labelWidth)), this.labelHeight > s && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - s) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - s), this.setHeight(this.labelHeight));
                }
              }
            }, n.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == e.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, n.prototype.transform = function(r) {
              var l = this.rect.x;
              l > i.WORLD_BOUNDARY ? l = i.WORLD_BOUNDARY : l < -i.WORLD_BOUNDARY && (l = -i.WORLD_BOUNDARY);
              var s = this.rect.y;
              s > i.WORLD_BOUNDARY ? s = i.WORLD_BOUNDARY : s < -i.WORLD_BOUNDARY && (s = -i.WORLD_BOUNDARY);
              var c = new g(l, s), v = r.inverseTransformPoint(c);
              this.setLocation(v.x, v.y);
            }, n.prototype.getLeft = function() {
              return this.rect.x;
            }, n.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, n.prototype.getTop = function() {
              return this.rect.y;
            }, n.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, n.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, R.exports = n;
          },
          /* 4 */
          /***/
          function(R, M, T) {
            function o(e, t) {
              e == null && t == null ? (this.x = 0, this.y = 0) : (this.x = e, this.y = t);
            }
            o.prototype.getX = function() {
              return this.x;
            }, o.prototype.getY = function() {
              return this.y;
            }, o.prototype.setX = function(e) {
              this.x = e;
            }, o.prototype.setY = function(e) {
              this.y = e;
            }, o.prototype.getDifference = function(e) {
              return new DimensionD(this.x - e.x, this.y - e.y);
            }, o.prototype.getCopy = function() {
              return new o(this.x, this.y);
            }, o.prototype.translate = function(e) {
              return this.x += e.width, this.y += e.height, this;
            }, R.exports = o;
          },
          /* 5 */
          /***/
          function(R, M, T) {
            var o = T(2), e = T(10), t = T(0), i = T(6), h = T(3), g = T(1), n = T(13), d = T(12), r = T(11);
            function l(c, v, L) {
              o.call(this, L), this.estimatedSize = e.MIN_VALUE, this.margin = t.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = c, v != null && v instanceof i ? this.graphManager = v : v != null && v instanceof Layout && (this.graphManager = v.graphManager);
            }
            l.prototype = Object.create(o.prototype);
            for (var s in o)
              l[s] = o[s];
            l.prototype.getNodes = function() {
              return this.nodes;
            }, l.prototype.getEdges = function() {
              return this.edges;
            }, l.prototype.getGraphManager = function() {
              return this.graphManager;
            }, l.prototype.getParent = function() {
              return this.parent;
            }, l.prototype.getLeft = function() {
              return this.left;
            }, l.prototype.getRight = function() {
              return this.right;
            }, l.prototype.getTop = function() {
              return this.top;
            }, l.prototype.getBottom = function() {
              return this.bottom;
            }, l.prototype.isConnected = function() {
              return this.isConnected;
            }, l.prototype.add = function(c, v, L) {
              if (v == null && L == null) {
                var p = c;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(p) > -1)
                  throw "Node already in graph!";
                return p.owner = this, this.getNodes().push(p), p;
              } else {
                var A = c;
                if (!(this.getNodes().indexOf(v) > -1 && this.getNodes().indexOf(L) > -1))
                  throw "Source or target not in graph!";
                if (!(v.owner == L.owner && v.owner == this))
                  throw "Both owners must be this graph!";
                return v.owner != L.owner ? null : (A.source = v, A.target = L, A.isInterGraph = !1, this.getEdges().push(A), v.edges.push(A), L != v && L.edges.push(A), A);
              }
            }, l.prototype.remove = function(c) {
              var v = c;
              if (c instanceof h) {
                if (v == null)
                  throw "Node is null!";
                if (!(v.owner != null && v.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var L = v.edges.slice(), p, A = L.length, E = 0; E < A; E++)
                  p = L[E], p.isInterGraph ? this.graphManager.remove(p) : p.source.owner.remove(p);
                var O = this.nodes.indexOf(v);
                if (O == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(O, 1);
              } else if (c instanceof g) {
                var p = c;
                if (p == null)
                  throw "Edge is null!";
                if (!(p.source != null && p.target != null))
                  throw "Source and/or target is null!";
                if (!(p.source.owner != null && p.target.owner != null && p.source.owner == this && p.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var a = p.source.edges.indexOf(p), u = p.target.edges.indexOf(p);
                if (!(a > -1 && u > -1))
                  throw "Source and/or target doesn't know this edge!";
                p.source.edges.splice(a, 1), p.target != p.source && p.target.edges.splice(u, 1);
                var O = p.source.owner.getEdges().indexOf(p);
                if (O == -1)
                  throw "Not in owner's edge list!";
                p.source.owner.getEdges().splice(O, 1);
              }
            }, l.prototype.updateLeftTop = function() {
              for (var c = e.MAX_VALUE, v = e.MAX_VALUE, L, p, A, E = this.getNodes(), O = E.length, a = 0; a < O; a++) {
                var u = E[a];
                L = u.getTop(), p = u.getLeft(), c > L && (c = L), v > p && (v = p);
              }
              return c == e.MAX_VALUE ? null : (E[0].getParent().paddingLeft != null ? A = E[0].getParent().paddingLeft : A = this.margin, this.left = v - A, this.top = c - A, new d(this.left, this.top));
            }, l.prototype.updateBounds = function(c) {
              for (var v = e.MAX_VALUE, L = -e.MAX_VALUE, p = e.MAX_VALUE, A = -e.MAX_VALUE, E, O, a, u, f, y = this.nodes, D = y.length, N = 0; N < D; N++) {
                var I = y[N];
                c && I.child != null && I.updateBounds(), E = I.getLeft(), O = I.getRight(), a = I.getTop(), u = I.getBottom(), v > E && (v = E), L < O && (L = O), p > a && (p = a), A < u && (A = u);
              }
              var m = new n(v, p, L - v, A - p);
              v == e.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), y[0].getParent().paddingLeft != null ? f = y[0].getParent().paddingLeft : f = this.margin, this.left = m.x - f, this.right = m.x + m.width + f, this.top = m.y - f, this.bottom = m.y + m.height + f;
            }, l.calculateBounds = function(c) {
              for (var v = e.MAX_VALUE, L = -e.MAX_VALUE, p = e.MAX_VALUE, A = -e.MAX_VALUE, E, O, a, u, f = c.length, y = 0; y < f; y++) {
                var D = c[y];
                E = D.getLeft(), O = D.getRight(), a = D.getTop(), u = D.getBottom(), v > E && (v = E), L < O && (L = O), p > a && (p = a), A < u && (A = u);
              }
              var N = new n(v, p, L - v, A - p);
              return N;
            }, l.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, l.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == e.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, l.prototype.calcEstimatedSize = function() {
              for (var c = 0, v = this.nodes, L = v.length, p = 0; p < L; p++) {
                var A = v[p];
                c += A.calcEstimatedSize();
              }
              return c == 0 ? this.estimatedSize = t.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = c / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, l.prototype.updateConnected = function() {
              var c = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var v = new r(), L = /* @__PURE__ */ new Set(), p = this.nodes[0], A, E, O = p.withChildren();
              for (O.forEach(function(N) {
                v.push(N), L.add(N);
              }); v.length !== 0; ) {
                p = v.shift(), A = p.getEdges();
                for (var a = A.length, u = 0; u < a; u++) {
                  var f = A[u];
                  if (E = f.getOtherEndInGraph(p, this), E != null && !L.has(E)) {
                    var y = E.withChildren();
                    y.forEach(function(N) {
                      v.push(N), L.add(N);
                    });
                  }
                }
              }
              if (this.isConnected = !1, L.size >= this.nodes.length) {
                var D = 0;
                L.forEach(function(N) {
                  N.owner == c && D++;
                }), D == this.nodes.length && (this.isConnected = !0);
              }
            }, R.exports = l;
          },
          /* 6 */
          /***/
          function(R, M, T) {
            var o, e = T(1);
            function t(i) {
              o = T(5), this.layout = i, this.graphs = [], this.edges = [];
            }
            t.prototype.addRoot = function() {
              var i = this.layout.newGraph(), h = this.layout.newNode(null), g = this.add(i, h);
              return this.setRootGraph(g), this.rootGraph;
            }, t.prototype.add = function(i, h, g, n, d) {
              if (g == null && n == null && d == null) {
                if (i == null)
                  throw "Graph is null!";
                if (h == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(i) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(i), i.parent != null)
                  throw "Already has a parent!";
                if (h.child != null)
                  throw "Already has a child!";
                return i.parent = h, h.child = i, i;
              } else {
                d = g, n = h, g = i;
                var r = n.getOwner(), l = d.getOwner();
                if (!(r != null && r.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(l != null && l.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (r == l)
                  return g.isInterGraph = !1, r.add(g, n, d);
                if (g.isInterGraph = !0, g.source = n, g.target = d, this.edges.indexOf(g) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(g), !(g.source != null && g.target != null))
                  throw "Edge source and/or target is null!";
                if (!(g.source.edges.indexOf(g) == -1 && g.target.edges.indexOf(g) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return g.source.edges.push(g), g.target.edges.push(g), g;
              }
            }, t.prototype.remove = function(i) {
              if (i instanceof o) {
                var h = i;
                if (h.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(h == this.rootGraph || h.parent != null && h.parent.graphManager == this))
                  throw "Invalid parent node!";
                var g = [];
                g = g.concat(h.getEdges());
                for (var n, d = g.length, r = 0; r < d; r++)
                  n = g[r], h.remove(n);
                var l = [];
                l = l.concat(h.getNodes());
                var s;
                d = l.length;
                for (var r = 0; r < d; r++)
                  s = l[r], h.remove(s);
                h == this.rootGraph && this.setRootGraph(null);
                var c = this.graphs.indexOf(h);
                this.graphs.splice(c, 1), h.parent = null;
              } else if (i instanceof e) {
                if (n = i, n == null)
                  throw "Edge is null!";
                if (!n.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(n.source != null && n.target != null))
                  throw "Source and/or target is null!";
                if (!(n.source.edges.indexOf(n) != -1 && n.target.edges.indexOf(n) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var c = n.source.edges.indexOf(n);
                if (n.source.edges.splice(c, 1), c = n.target.edges.indexOf(n), n.target.edges.splice(c, 1), !(n.source.owner != null && n.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (n.source.owner.getGraphManager().edges.indexOf(n) == -1)
                  throw "Not in owner graph manager's edge list!";
                var c = n.source.owner.getGraphManager().edges.indexOf(n);
                n.source.owner.getGraphManager().edges.splice(c, 1);
              }
            }, t.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, t.prototype.getGraphs = function() {
              return this.graphs;
            }, t.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var i = [], h = this.getGraphs(), g = h.length, n = 0; n < g; n++)
                  i = i.concat(h[n].getNodes());
                this.allNodes = i;
              }
              return this.allNodes;
            }, t.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, t.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, t.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, t.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var i = [], h = this.getGraphs();
                h.length;
                for (var g = 0; g < h.length; g++)
                  i = i.concat(h[g].getEdges());
                i = i.concat(this.edges), this.allEdges = i;
              }
              return this.allEdges;
            }, t.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, t.prototype.setAllNodesToApplyGravitation = function(i) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = i;
            }, t.prototype.getRoot = function() {
              return this.rootGraph;
            }, t.prototype.setRootGraph = function(i) {
              if (i.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = i, i.parent == null && (i.parent = this.layout.newNode("Root node"));
            }, t.prototype.getLayout = function() {
              return this.layout;
            }, t.prototype.isOneAncestorOfOther = function(i, h) {
              if (!(i != null && h != null))
                throw "assert failed";
              if (i == h)
                return !0;
              var g = i.getOwner(), n;
              do {
                if (n = g.getParent(), n == null)
                  break;
                if (n == h)
                  return !0;
                if (g = n.getOwner(), g == null)
                  break;
              } while (!0);
              g = h.getOwner();
              do {
                if (n = g.getParent(), n == null)
                  break;
                if (n == i)
                  return !0;
                if (g = n.getOwner(), g == null)
                  break;
              } while (!0);
              return !1;
            }, t.prototype.calcLowestCommonAncestors = function() {
              for (var i, h, g, n, d, r = this.getAllEdges(), l = r.length, s = 0; s < l; s++) {
                if (i = r[s], h = i.source, g = i.target, i.lca = null, i.sourceInLca = h, i.targetInLca = g, h == g) {
                  i.lca = h.getOwner();
                  continue;
                }
                for (n = h.getOwner(); i.lca == null; ) {
                  for (i.targetInLca = g, d = g.getOwner(); i.lca == null; ) {
                    if (d == n) {
                      i.lca = d;
                      break;
                    }
                    if (d == this.rootGraph)
                      break;
                    if (i.lca != null)
                      throw "assert failed";
                    i.targetInLca = d.getParent(), d = i.targetInLca.getOwner();
                  }
                  if (n == this.rootGraph)
                    break;
                  i.lca == null && (i.sourceInLca = n.getParent(), n = i.sourceInLca.getOwner());
                }
                if (i.lca == null)
                  throw "assert failed";
              }
            }, t.prototype.calcLowestCommonAncestor = function(i, h) {
              if (i == h)
                return i.getOwner();
              var g = i.getOwner();
              do {
                if (g == null)
                  break;
                var n = h.getOwner();
                do {
                  if (n == null)
                    break;
                  if (n == g)
                    return n;
                  n = n.getParent().getOwner();
                } while (!0);
                g = g.getParent().getOwner();
              } while (!0);
              return g;
            }, t.prototype.calcInclusionTreeDepths = function(i, h) {
              i == null && h == null && (i = this.rootGraph, h = 1);
              for (var g, n = i.getNodes(), d = n.length, r = 0; r < d; r++)
                g = n[r], g.inclusionTreeDepth = h, g.child != null && this.calcInclusionTreeDepths(g.child, h + 1);
            }, t.prototype.includesInvalidEdge = function() {
              for (var i, h = this.edges.length, g = 0; g < h; g++)
                if (i = this.edges[g], this.isOneAncestorOfOther(i.source, i.target))
                  return !0;
              return !1;
            }, R.exports = t;
          },
          /* 7 */
          /***/
          function(R, M, T) {
            var o = T(0);
            function e() {
            }
            for (var t in o)
              e[t] = o[t];
            e.MAX_ITERATIONS = 2500, e.DEFAULT_EDGE_LENGTH = 50, e.DEFAULT_SPRING_STRENGTH = 0.45, e.DEFAULT_REPULSION_STRENGTH = 4500, e.DEFAULT_GRAVITY_STRENGTH = 0.4, e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, e.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, e.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, e.COOLING_ADAPTATION_FACTOR = 0.33, e.ADAPTATION_LOWER_NODE_LIMIT = 1e3, e.ADAPTATION_UPPER_NODE_LIMIT = 5e3, e.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, e.MAX_NODE_DISPLACEMENT = e.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, e.MIN_REPULSION_DIST = e.DEFAULT_EDGE_LENGTH / 10, e.CONVERGENCE_CHECK_PERIOD = 100, e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, e.MIN_EDGE_LENGTH = 1, e.GRID_CALCULATION_CHECK_PERIOD = 10, R.exports = e;
          },
          /* 8 */
          /***/
          function(R, M, T) {
            var o = T(12);
            function e() {
            }
            e.calcSeparationAmount = function(t, i, h, g) {
              if (!t.intersects(i))
                throw "assert failed";
              var n = new Array(2);
              this.decideDirectionsForOverlappingNodes(t, i, n), h[0] = Math.min(t.getRight(), i.getRight()) - Math.max(t.x, i.x), h[1] = Math.min(t.getBottom(), i.getBottom()) - Math.max(t.y, i.y), t.getX() <= i.getX() && t.getRight() >= i.getRight() ? h[0] += Math.min(i.getX() - t.getX(), t.getRight() - i.getRight()) : i.getX() <= t.getX() && i.getRight() >= t.getRight() && (h[0] += Math.min(t.getX() - i.getX(), i.getRight() - t.getRight())), t.getY() <= i.getY() && t.getBottom() >= i.getBottom() ? h[1] += Math.min(i.getY() - t.getY(), t.getBottom() - i.getBottom()) : i.getY() <= t.getY() && i.getBottom() >= t.getBottom() && (h[1] += Math.min(t.getY() - i.getY(), i.getBottom() - t.getBottom()));
              var d = Math.abs((i.getCenterY() - t.getCenterY()) / (i.getCenterX() - t.getCenterX()));
              i.getCenterY() === t.getCenterY() && i.getCenterX() === t.getCenterX() && (d = 1);
              var r = d * h[0], l = h[1] / d;
              h[0] < l ? l = h[0] : r = h[1], h[0] = -1 * n[0] * (l / 2 + g), h[1] = -1 * n[1] * (r / 2 + g);
            }, e.decideDirectionsForOverlappingNodes = function(t, i, h) {
              t.getCenterX() < i.getCenterX() ? h[0] = -1 : h[0] = 1, t.getCenterY() < i.getCenterY() ? h[1] = -1 : h[1] = 1;
            }, e.getIntersection2 = function(t, i, h) {
              var g = t.getCenterX(), n = t.getCenterY(), d = i.getCenterX(), r = i.getCenterY();
              if (t.intersects(i))
                return h[0] = g, h[1] = n, h[2] = d, h[3] = r, !0;
              var l = t.getX(), s = t.getY(), c = t.getRight(), v = t.getX(), L = t.getBottom(), p = t.getRight(), A = t.getWidthHalf(), E = t.getHeightHalf(), O = i.getX(), a = i.getY(), u = i.getRight(), f = i.getX(), y = i.getBottom(), D = i.getRight(), N = i.getWidthHalf(), I = i.getHeightHalf(), m = !1, C = !1;
              if (g === d) {
                if (n > r)
                  return h[0] = g, h[1] = s, h[2] = d, h[3] = y, !1;
                if (n < r)
                  return h[0] = g, h[1] = L, h[2] = d, h[3] = a, !1;
              } else if (n === r) {
                if (g > d)
                  return h[0] = l, h[1] = n, h[2] = u, h[3] = r, !1;
                if (g < d)
                  return h[0] = c, h[1] = n, h[2] = O, h[3] = r, !1;
              } else {
                var F = t.height / t.width, P = i.height / i.width, w = (r - n) / (d - g), G = void 0, x = void 0, S = void 0, U = void 0, Y = void 0, _ = void 0;
                if (-F === w ? g > d ? (h[0] = v, h[1] = L, m = !0) : (h[0] = c, h[1] = s, m = !0) : F === w && (g > d ? (h[0] = l, h[1] = s, m = !0) : (h[0] = p, h[1] = L, m = !0)), -P === w ? d > g ? (h[2] = f, h[3] = y, C = !0) : (h[2] = u, h[3] = a, C = !0) : P === w && (d > g ? (h[2] = O, h[3] = a, C = !0) : (h[2] = D, h[3] = y, C = !0)), m && C)
                  return !1;
                if (g > d ? n > r ? (G = this.getCardinalDirection(F, w, 4), x = this.getCardinalDirection(P, w, 2)) : (G = this.getCardinalDirection(-F, w, 3), x = this.getCardinalDirection(-P, w, 1)) : n > r ? (G = this.getCardinalDirection(-F, w, 1), x = this.getCardinalDirection(-P, w, 3)) : (G = this.getCardinalDirection(F, w, 2), x = this.getCardinalDirection(P, w, 4)), !m)
                  switch (G) {
                    case 1:
                      U = s, S = g + -E / w, h[0] = S, h[1] = U;
                      break;
                    case 2:
                      S = p, U = n + A * w, h[0] = S, h[1] = U;
                      break;
                    case 3:
                      U = L, S = g + E / w, h[0] = S, h[1] = U;
                      break;
                    case 4:
                      S = v, U = n + -A * w, h[0] = S, h[1] = U;
                      break;
                  }
                if (!C)
                  switch (x) {
                    case 1:
                      _ = a, Y = d + -I / w, h[2] = Y, h[3] = _;
                      break;
                    case 2:
                      Y = D, _ = r + N * w, h[2] = Y, h[3] = _;
                      break;
                    case 3:
                      _ = y, Y = d + I / w, h[2] = Y, h[3] = _;
                      break;
                    case 4:
                      Y = f, _ = r + -N * w, h[2] = Y, h[3] = _;
                      break;
                  }
              }
              return !1;
            }, e.getCardinalDirection = function(t, i, h) {
              return t > i ? h : 1 + h % 4;
            }, e.getIntersection = function(t, i, h, g) {
              if (g == null)
                return this.getIntersection2(t, i, h);
              var n = t.x, d = t.y, r = i.x, l = i.y, s = h.x, c = h.y, v = g.x, L = g.y, p = void 0, A = void 0, E = void 0, O = void 0, a = void 0, u = void 0, f = void 0, y = void 0, D = void 0;
              return E = l - d, a = n - r, f = r * d - n * l, O = L - c, u = s - v, y = v * c - s * L, D = E * u - O * a, D === 0 ? null : (p = (a * y - u * f) / D, A = (O * f - E * y) / D, new o(p, A));
            }, e.angleOfVector = function(t, i, h, g) {
              var n = void 0;
              return t !== h ? (n = Math.atan((g - i) / (h - t)), h < t ? n += Math.PI : g < i && (n += this.TWO_PI)) : g < i ? n = this.ONE_AND_HALF_PI : n = this.HALF_PI, n;
            }, e.doIntersect = function(t, i, h, g) {
              var n = t.x, d = t.y, r = i.x, l = i.y, s = h.x, c = h.y, v = g.x, L = g.y, p = (r - n) * (L - c) - (v - s) * (l - d);
              if (p === 0)
                return !1;
              var A = ((L - c) * (v - n) + (s - v) * (L - d)) / p, E = ((d - l) * (v - n) + (r - n) * (L - d)) / p;
              return 0 < A && A < 1 && 0 < E && E < 1;
            }, e.HALF_PI = 0.5 * Math.PI, e.ONE_AND_HALF_PI = 1.5 * Math.PI, e.TWO_PI = 2 * Math.PI, e.THREE_PI = 3 * Math.PI, R.exports = e;
          },
          /* 9 */
          /***/
          function(R, M, T) {
            function o() {
            }
            o.sign = function(e) {
              return e > 0 ? 1 : e < 0 ? -1 : 0;
            }, o.floor = function(e) {
              return e < 0 ? Math.ceil(e) : Math.floor(e);
            }, o.ceil = function(e) {
              return e < 0 ? Math.floor(e) : Math.ceil(e);
            }, R.exports = o;
          },
          /* 10 */
          /***/
          function(R, M, T) {
            function o() {
            }
            o.MAX_VALUE = 2147483647, o.MIN_VALUE = -2147483648, R.exports = o;
          },
          /* 11 */
          /***/
          function(R, M, T) {
            var o = function() {
              function n(d, r) {
                for (var l = 0; l < r.length; l++) {
                  var s = r[l];
                  s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(d, s.key, s);
                }
              }
              return function(d, r, l) {
                return r && n(d.prototype, r), l && n(d, l), d;
              };
            }();
            function e(n, d) {
              if (!(n instanceof d))
                throw new TypeError("Cannot call a class as a function");
            }
            var t = function(d) {
              return { value: d, next: null, prev: null };
            }, i = function(d, r, l, s) {
              return d !== null ? d.next = r : s.head = r, l !== null ? l.prev = r : s.tail = r, r.prev = d, r.next = l, s.length++, r;
            }, h = function(d, r) {
              var l = d.prev, s = d.next;
              return l !== null ? l.next = s : r.head = s, s !== null ? s.prev = l : r.tail = l, d.prev = d.next = null, r.length--, d;
            }, g = function() {
              function n(d) {
                var r = this;
                e(this, n), this.length = 0, this.head = null, this.tail = null, d != null && d.forEach(function(l) {
                  return r.push(l);
                });
              }
              return o(n, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(r, l) {
                  return i(l.prev, t(r), l, this);
                }
              }, {
                key: "insertAfter",
                value: function(r, l) {
                  return i(l, t(r), l.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(r, l) {
                  return i(l.prev, r, l, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(r, l) {
                  return i(l, r, l.next, this);
                }
              }, {
                key: "push",
                value: function(r) {
                  return i(this.tail, t(r), null, this);
                }
              }, {
                key: "unshift",
                value: function(r) {
                  return i(null, t(r), this.head, this);
                }
              }, {
                key: "remove",
                value: function(r) {
                  return h(r, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return h(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return h(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return h(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return h(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(r) {
                  if (r <= this.length()) {
                    for (var l = 1, s = this.head; l < r; )
                      s = s.next, l++;
                    return s.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(r, l) {
                  if (r <= this.length()) {
                    for (var s = 1, c = this.head; s < r; )
                      c = c.next, s++;
                    c.value = l;
                  }
                }
              }]), n;
            }();
            R.exports = g;
          },
          /* 12 */
          /***/
          function(R, M, T) {
            function o(e, t, i) {
              this.x = null, this.y = null, e == null && t == null && i == null ? (this.x = 0, this.y = 0) : typeof e == "number" && typeof t == "number" && i == null ? (this.x = e, this.y = t) : e.constructor.name == "Point" && t == null && i == null && (i = e, this.x = i.x, this.y = i.y);
            }
            o.prototype.getX = function() {
              return this.x;
            }, o.prototype.getY = function() {
              return this.y;
            }, o.prototype.getLocation = function() {
              return new o(this.x, this.y);
            }, o.prototype.setLocation = function(e, t, i) {
              e.constructor.name == "Point" && t == null && i == null ? (i = e, this.setLocation(i.x, i.y)) : typeof e == "number" && typeof t == "number" && i == null && (parseInt(e) == e && parseInt(t) == t ? this.move(e, t) : (this.x = Math.floor(e + 0.5), this.y = Math.floor(t + 0.5)));
            }, o.prototype.move = function(e, t) {
              this.x = e, this.y = t;
            }, o.prototype.translate = function(e, t) {
              this.x += e, this.y += t;
            }, o.prototype.equals = function(e) {
              if (e.constructor.name == "Point") {
                var t = e;
                return this.x == t.x && this.y == t.y;
              }
              return this == e;
            }, o.prototype.toString = function() {
              return new o().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, R.exports = o;
          },
          /* 13 */
          /***/
          function(R, M, T) {
            function o(e, t, i, h) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, e != null && t != null && i != null && h != null && (this.x = e, this.y = t, this.width = i, this.height = h);
            }
            o.prototype.getX = function() {
              return this.x;
            }, o.prototype.setX = function(e) {
              this.x = e;
            }, o.prototype.getY = function() {
              return this.y;
            }, o.prototype.setY = function(e) {
              this.y = e;
            }, o.prototype.getWidth = function() {
              return this.width;
            }, o.prototype.setWidth = function(e) {
              this.width = e;
            }, o.prototype.getHeight = function() {
              return this.height;
            }, o.prototype.setHeight = function(e) {
              this.height = e;
            }, o.prototype.getRight = function() {
              return this.x + this.width;
            }, o.prototype.getBottom = function() {
              return this.y + this.height;
            }, o.prototype.intersects = function(e) {
              return !(this.getRight() < e.x || this.getBottom() < e.y || e.getRight() < this.x || e.getBottom() < this.y);
            }, o.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, o.prototype.getMinX = function() {
              return this.getX();
            }, o.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, o.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, o.prototype.getMinY = function() {
              return this.getY();
            }, o.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, o.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, o.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, R.exports = o;
          },
          /* 14 */
          /***/
          function(R, M, T) {
            var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
              return typeof t;
            } : function(t) {
              return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            };
            function e() {
            }
            e.lastID = 0, e.createID = function(t) {
              return e.isPrimitive(t) ? t : (t.uniqueID != null || (t.uniqueID = e.getString(), e.lastID++), t.uniqueID);
            }, e.getString = function(t) {
              return t == null && (t = e.lastID), "Object#" + t;
            }, e.isPrimitive = function(t) {
              var i = typeof t > "u" ? "undefined" : o(t);
              return t == null || i != "object" && i != "function";
            }, R.exports = e;
          },
          /* 15 */
          /***/
          function(R, M, T) {
            function o(s) {
              if (Array.isArray(s)) {
                for (var c = 0, v = Array(s.length); c < s.length; c++)
                  v[c] = s[c];
                return v;
              } else
                return Array.from(s);
            }
            var e = T(0), t = T(6), i = T(3), h = T(1), g = T(5), n = T(4), d = T(17), r = T(27);
            function l(s) {
              r.call(this), this.layoutQuality = e.QUALITY, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = e.DEFAULT_INCREMENTAL, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new t(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, s != null && (this.isRemoteUse = s);
            }
            l.RANDOM_SEED = 1, l.prototype = Object.create(r.prototype), l.prototype.getGraphManager = function() {
              return this.graphManager;
            }, l.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, l.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, l.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, l.prototype.newGraphManager = function() {
              var s = new t(this);
              return this.graphManager = s, s;
            }, l.prototype.newGraph = function(s) {
              return new g(null, this.graphManager, s);
            }, l.prototype.newNode = function(s) {
              return new i(this.graphManager, s);
            }, l.prototype.newEdge = function(s) {
              return new h(null, null, s);
            }, l.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, l.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var s;
              return this.checkLayoutSuccess() ? s = !1 : s = this.layout(), e.ANIMATE === "during" ? !1 : (s && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, s);
            }, l.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, l.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var s = this.graphManager.getAllEdges(), c = 0; c < s.length; c++)
                  s[c];
                for (var v = this.graphManager.getRoot().getNodes(), c = 0; c < v.length; c++)
                  v[c];
                this.update(this.graphManager.getRoot());
              }
            }, l.prototype.update = function(s) {
              if (s == null)
                this.update2();
              else if (s instanceof i) {
                var c = s;
                if (c.getChild() != null)
                  for (var v = c.getChild().getNodes(), L = 0; L < v.length; L++)
                    update(v[L]);
                if (c.vGraphObject != null) {
                  var p = c.vGraphObject;
                  p.update(c);
                }
              } else if (s instanceof h) {
                var A = s;
                if (A.vGraphObject != null) {
                  var E = A.vGraphObject;
                  E.update(A);
                }
              } else if (s instanceof g) {
                var O = s;
                if (O.vGraphObject != null) {
                  var a = O.vGraphObject;
                  a.update(O);
                }
              }
            }, l.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = e.QUALITY, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = e.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, l.prototype.transform = function(s) {
              if (s == null)
                this.transform(new n(0, 0));
              else {
                var c = new d(), v = this.graphManager.getRoot().updateLeftTop();
                if (v != null) {
                  c.setWorldOrgX(s.x), c.setWorldOrgY(s.y), c.setDeviceOrgX(v.x), c.setDeviceOrgY(v.y);
                  for (var L = this.getAllNodes(), p, A = 0; A < L.length; A++)
                    p = L[A], p.transform(c);
                }
              }
            }, l.prototype.positionNodesRandomly = function(s) {
              if (s == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var c, v, L = s.getNodes(), p = 0; p < L.length; p++)
                  c = L[p], v = c.getChild(), v == null || v.getNodes().length == 0 ? c.scatter() : (this.positionNodesRandomly(v), c.updateBounds());
            }, l.prototype.getFlatForest = function() {
              for (var s = [], c = !0, v = this.graphManager.getRoot().getNodes(), L = !0, p = 0; p < v.length; p++)
                v[p].getChild() != null && (L = !1);
              if (!L)
                return s;
              var A = /* @__PURE__ */ new Set(), E = [], O = /* @__PURE__ */ new Map(), a = [];
              for (a = a.concat(v); a.length > 0 && c; ) {
                for (E.push(a[0]); E.length > 0 && c; ) {
                  var u = E[0];
                  E.splice(0, 1), A.add(u);
                  for (var f = u.getEdges(), p = 0; p < f.length; p++) {
                    var y = f[p].getOtherEnd(u);
                    if (O.get(u) != y)
                      if (!A.has(y))
                        E.push(y), O.set(y, u);
                      else {
                        c = !1;
                        break;
                      }
                  }
                }
                if (!c)
                  s = [];
                else {
                  var D = [].concat(o(A));
                  s.push(D);
                  for (var p = 0; p < D.length; p++) {
                    var N = D[p], I = a.indexOf(N);
                    I > -1 && a.splice(I, 1);
                  }
                  A = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
                }
              }
              return s;
            }, l.prototype.createDummyNodesForBendpoints = function(s) {
              for (var c = [], v = s.source, L = this.graphManager.calcLowestCommonAncestor(s.source, s.target), p = 0; p < s.bendpoints.length; p++) {
                var A = this.newNode(null);
                A.setRect(new Point(0, 0), new Dimension(1, 1)), L.add(A);
                var E = this.newEdge(null);
                this.graphManager.add(E, v, A), c.add(A), v = A;
              }
              var E = this.newEdge(null);
              return this.graphManager.add(E, v, s.target), this.edgeToDummyNodes.set(s, c), s.isInterGraph() ? this.graphManager.remove(s) : L.remove(s), c;
            }, l.prototype.createBendpointsFromDummyNodes = function() {
              var s = [];
              s = s.concat(this.graphManager.getAllEdges()), s = [].concat(o(this.edgeToDummyNodes.keys())).concat(s);
              for (var c = 0; c < s.length; c++) {
                var v = s[c];
                if (v.bendpoints.length > 0) {
                  for (var L = this.edgeToDummyNodes.get(v), p = 0; p < L.length; p++) {
                    var A = L[p], E = new n(A.getCenterX(), A.getCenterY()), O = v.bendpoints.get(p);
                    O.x = E.x, O.y = E.y, A.getOwner().remove(A);
                  }
                  this.graphManager.add(v, v.source, v.target);
                }
              }
            }, l.transform = function(s, c, v, L) {
              if (v != null && L != null) {
                var p = c;
                if (s <= 50) {
                  var A = c / v;
                  p -= (c - A) / 50 * (50 - s);
                } else {
                  var E = c * L;
                  p += (E - c) / 50 * (s - 50);
                }
                return p;
              } else {
                var O, a;
                return s <= 50 ? (O = 9 * c / 500, a = c / 10) : (O = 9 * c / 50, a = -8 * c), O * s + a;
              }
            }, l.findCenterOfTree = function(s) {
              var c = [];
              c = c.concat(s);
              var v = [], L = /* @__PURE__ */ new Map(), p = !1, A = null;
              (c.length == 1 || c.length == 2) && (p = !0, A = c[0]);
              for (var E = 0; E < c.length; E++) {
                var O = c[E], a = O.getNeighborsList().size;
                L.set(O, O.getNeighborsList().size), a == 1 && v.push(O);
              }
              var u = [];
              for (u = u.concat(v); !p; ) {
                var f = [];
                f = f.concat(u), u = [];
                for (var E = 0; E < c.length; E++) {
                  var O = c[E], y = c.indexOf(O);
                  y >= 0 && c.splice(y, 1);
                  var D = O.getNeighborsList();
                  D.forEach(function(m) {
                    if (v.indexOf(m) < 0) {
                      var C = L.get(m), F = C - 1;
                      F == 1 && u.push(m), L.set(m, F);
                    }
                  });
                }
                v = v.concat(u), (c.length == 1 || c.length == 2) && (p = !0, A = c[0]);
              }
              return A;
            }, l.prototype.setGraphManager = function(s) {
              this.graphManager = s;
            }, R.exports = l;
          },
          /* 16 */
          /***/
          function(R, M, T) {
            function o() {
            }
            o.seed = 1, o.x = 0, o.nextDouble = function() {
              return o.x = Math.sin(o.seed++) * 1e4, o.x - Math.floor(o.x);
            }, R.exports = o;
          },
          /* 17 */
          /***/
          function(R, M, T) {
            var o = T(4);
            function e(t, i) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            e.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, e.prototype.setWorldOrgX = function(t) {
              this.lworldOrgX = t;
            }, e.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, e.prototype.setWorldOrgY = function(t) {
              this.lworldOrgY = t;
            }, e.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, e.prototype.setWorldExtX = function(t) {
              this.lworldExtX = t;
            }, e.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, e.prototype.setWorldExtY = function(t) {
              this.lworldExtY = t;
            }, e.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, e.prototype.setDeviceOrgX = function(t) {
              this.ldeviceOrgX = t;
            }, e.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, e.prototype.setDeviceOrgY = function(t) {
              this.ldeviceOrgY = t;
            }, e.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, e.prototype.setDeviceExtX = function(t) {
              this.ldeviceExtX = t;
            }, e.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, e.prototype.setDeviceExtY = function(t) {
              this.ldeviceExtY = t;
            }, e.prototype.transformX = function(t) {
              var i = 0, h = this.lworldExtX;
              return h != 0 && (i = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / h), i;
            }, e.prototype.transformY = function(t) {
              var i = 0, h = this.lworldExtY;
              return h != 0 && (i = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / h), i;
            }, e.prototype.inverseTransformX = function(t) {
              var i = 0, h = this.ldeviceExtX;
              return h != 0 && (i = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / h), i;
            }, e.prototype.inverseTransformY = function(t) {
              var i = 0, h = this.ldeviceExtY;
              return h != 0 && (i = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / h), i;
            }, e.prototype.inverseTransformPoint = function(t) {
              var i = new o(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
              return i;
            }, R.exports = e;
          },
          /* 18 */
          /***/
          function(R, M, T) {
            function o(r) {
              if (Array.isArray(r)) {
                for (var l = 0, s = Array(r.length); l < r.length; l++)
                  s[l] = r[l];
                return s;
              } else
                return Array.from(r);
            }
            var e = T(15), t = T(7), i = T(0), h = T(8), g = T(9);
            function n() {
              e.call(this), this.useSmartIdealEdgeLengthCalculation = t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = t.DEFAULT_EDGE_LENGTH, this.springConstant = t.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = t.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = t.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = t.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * t.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = t.MAX_ITERATIONS;
            }
            n.prototype = Object.create(e.prototype);
            for (var d in e)
              n[d] = e[d];
            n.prototype.initParameters = function() {
              e.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, n.prototype.calcIdealEdgeLengths = function() {
              for (var r, l, s, c, v, L, p = this.getGraphManager().getAllEdges(), A = 0; A < p.length; A++)
                r = p[A], r.idealLength = this.idealEdgeLength, r.isInterGraph && (s = r.getSource(), c = r.getTarget(), v = r.getSourceInLca().getEstimatedSize(), L = r.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (r.idealLength += v + L - 2 * i.SIMPLE_NODE_SIZE), l = r.getLca().getInclusionTreeDepth(), r.idealLength += t.DEFAULT_EDGE_LENGTH * t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (s.getInclusionTreeDepth() + c.getInclusionTreeDepth() - 2 * l));
            }, n.prototype.initSpringEmbedder = function() {
              var r = this.getAllNodes().length;
              this.incremental ? (r > t.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * t.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (r - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - t.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (r > t.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(t.COOLING_ADAPTATION_FACTOR, 1 - (r - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * (1 - t.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, n.prototype.calcSpringForces = function() {
              for (var r = this.getAllEdges(), l, s = 0; s < r.length; s++)
                l = r[s], this.calcSpringForce(l, l.idealLength);
            }, n.prototype.calcRepulsionForces = function() {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s, c, v, L, p = this.getAllNodes(), A;
              if (this.useFRGridVariant)
                for (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && r && this.updateGrid(), A = /* @__PURE__ */ new Set(), s = 0; s < p.length; s++)
                  v = p[s], this.calculateRepulsionForceOfANode(v, A, r, l), A.add(v);
              else
                for (s = 0; s < p.length; s++)
                  for (v = p[s], c = s + 1; c < p.length; c++)
                    L = p[c], v.getOwner() == L.getOwner() && this.calcRepulsionForce(v, L);
            }, n.prototype.calcGravitationalForces = function() {
              for (var r, l = this.getAllNodesToApplyGravitation(), s = 0; s < l.length; s++)
                r = l[s], this.calcGravitationalForce(r);
            }, n.prototype.moveNodes = function() {
              for (var r = this.getAllNodes(), l, s = 0; s < r.length; s++)
                l = r[s], l.move();
            }, n.prototype.calcSpringForce = function(r, l) {
              var s = r.getSource(), c = r.getTarget(), v, L, p, A;
              if (this.uniformLeafNodeSizes && s.getChild() == null && c.getChild() == null)
                r.updateLengthSimple();
              else if (r.updateLength(), r.isOverlapingSourceAndTarget)
                return;
              v = r.getLength(), v != 0 && (L = this.springConstant * (v - l), p = L * (r.lengthX / v), A = L * (r.lengthY / v), s.springForceX += p, s.springForceY += A, c.springForceX -= p, c.springForceY -= A);
            }, n.prototype.calcRepulsionForce = function(r, l) {
              var s = r.getRect(), c = l.getRect(), v = new Array(2), L = new Array(4), p, A, E, O, a, u, f;
              if (s.intersects(c)) {
                h.calcSeparationAmount(s, c, v, t.DEFAULT_EDGE_LENGTH / 2), u = 2 * v[0], f = 2 * v[1];
                var y = r.noOfChildren * l.noOfChildren / (r.noOfChildren + l.noOfChildren);
                r.repulsionForceX -= y * u, r.repulsionForceY -= y * f, l.repulsionForceX += y * u, l.repulsionForceY += y * f;
              } else
                this.uniformLeafNodeSizes && r.getChild() == null && l.getChild() == null ? (p = c.getCenterX() - s.getCenterX(), A = c.getCenterY() - s.getCenterY()) : (h.getIntersection(s, c, L), p = L[2] - L[0], A = L[3] - L[1]), Math.abs(p) < t.MIN_REPULSION_DIST && (p = g.sign(p) * t.MIN_REPULSION_DIST), Math.abs(A) < t.MIN_REPULSION_DIST && (A = g.sign(A) * t.MIN_REPULSION_DIST), E = p * p + A * A, O = Math.sqrt(E), a = this.repulsionConstant * r.noOfChildren * l.noOfChildren / E, u = a * p / O, f = a * A / O, r.repulsionForceX -= u, r.repulsionForceY -= f, l.repulsionForceX += u, l.repulsionForceY += f;
            }, n.prototype.calcGravitationalForce = function(r) {
              var l, s, c, v, L, p, A, E;
              l = r.getOwner(), s = (l.getRight() + l.getLeft()) / 2, c = (l.getTop() + l.getBottom()) / 2, v = r.getCenterX() - s, L = r.getCenterY() - c, p = Math.abs(v) + r.getWidth() / 2, A = Math.abs(L) + r.getHeight() / 2, r.getOwner() == this.graphManager.getRoot() ? (E = l.getEstimatedSize() * this.gravityRangeFactor, (p > E || A > E) && (r.gravitationForceX = -this.gravityConstant * v, r.gravitationForceY = -this.gravityConstant * L)) : (E = l.getEstimatedSize() * this.compoundGravityRangeFactor, (p > E || A > E) && (r.gravitationForceX = -this.gravityConstant * v * this.compoundGravityConstant, r.gravitationForceY = -this.gravityConstant * L * this.compoundGravityConstant));
            }, n.prototype.isConverged = function() {
              var r, l = !1;
              return this.totalIterations > this.maxIterations / 3 && (l = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), r = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, r || l;
            }, n.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, n.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var r, l = this.graphManager.getAllNodes(), s = 0; s < l.length; s++)
                r = l[s], r.noOfChildren = r.getNoOfChildren();
            }, n.prototype.calcGrid = function(r) {
              var l = 0, s = 0;
              l = parseInt(Math.ceil((r.getRight() - r.getLeft()) / this.repulsionRange)), s = parseInt(Math.ceil((r.getBottom() - r.getTop()) / this.repulsionRange));
              for (var c = new Array(l), v = 0; v < l; v++)
                c[v] = new Array(s);
              for (var v = 0; v < l; v++)
                for (var L = 0; L < s; L++)
                  c[v][L] = new Array();
              return c;
            }, n.prototype.addNodeToGrid = function(r, l, s) {
              var c = 0, v = 0, L = 0, p = 0;
              c = parseInt(Math.floor((r.getRect().x - l) / this.repulsionRange)), v = parseInt(Math.floor((r.getRect().width + r.getRect().x - l) / this.repulsionRange)), L = parseInt(Math.floor((r.getRect().y - s) / this.repulsionRange)), p = parseInt(Math.floor((r.getRect().height + r.getRect().y - s) / this.repulsionRange));
              for (var A = c; A <= v; A++)
                for (var E = L; E <= p; E++)
                  this.grid[A][E].push(r), r.setGridCoordinates(c, v, L, p);
            }, n.prototype.updateGrid = function() {
              var r, l, s = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), r = 0; r < s.length; r++)
                l = s[r], this.addNodeToGrid(l, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, n.prototype.calculateRepulsionForceOfANode = function(r, l, s, c) {
              if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && s || c) {
                var v = /* @__PURE__ */ new Set();
                r.surrounding = new Array();
                for (var L, p = this.grid, A = r.startX - 1; A < r.finishX + 2; A++)
                  for (var E = r.startY - 1; E < r.finishY + 2; E++)
                    if (!(A < 0 || E < 0 || A >= p.length || E >= p[0].length)) {
                      for (var O = 0; O < p[A][E].length; O++)
                        if (L = p[A][E][O], !(r.getOwner() != L.getOwner() || r == L) && !l.has(L) && !v.has(L)) {
                          var a = Math.abs(r.getCenterX() - L.getCenterX()) - (r.getWidth() / 2 + L.getWidth() / 2), u = Math.abs(r.getCenterY() - L.getCenterY()) - (r.getHeight() / 2 + L.getHeight() / 2);
                          a <= this.repulsionRange && u <= this.repulsionRange && v.add(L);
                        }
                    }
                r.surrounding = [].concat(o(v));
              }
              for (A = 0; A < r.surrounding.length; A++)
                this.calcRepulsionForce(r, r.surrounding[A]);
            }, n.prototype.calcRepulsionRange = function() {
              return 0;
            }, R.exports = n;
          },
          /* 19 */
          /***/
          function(R, M, T) {
            var o = T(1), e = T(7);
            function t(h, g, n) {
              o.call(this, h, g, n), this.idealLength = e.DEFAULT_EDGE_LENGTH;
            }
            t.prototype = Object.create(o.prototype);
            for (var i in o)
              t[i] = o[i];
            R.exports = t;
          },
          /* 20 */
          /***/
          function(R, M, T) {
            var o = T(3);
            function e(i, h, g, n) {
              o.call(this, i, h, g, n), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            e.prototype = Object.create(o.prototype);
            for (var t in o)
              e[t] = o[t];
            e.prototype.setGridCoordinates = function(i, h, g, n) {
              this.startX = i, this.finishX = h, this.startY = g, this.finishY = n;
            }, R.exports = e;
          },
          /* 21 */
          /***/
          function(R, M, T) {
            function o(e, t) {
              this.width = 0, this.height = 0, e !== null && t !== null && (this.height = t, this.width = e);
            }
            o.prototype.getWidth = function() {
              return this.width;
            }, o.prototype.setWidth = function(e) {
              this.width = e;
            }, o.prototype.getHeight = function() {
              return this.height;
            }, o.prototype.setHeight = function(e) {
              this.height = e;
            }, R.exports = o;
          },
          /* 22 */
          /***/
          function(R, M, T) {
            var o = T(14);
            function e() {
              this.map = {}, this.keys = [];
            }
            e.prototype.put = function(t, i) {
              var h = o.createID(t);
              this.contains(h) || (this.map[h] = i, this.keys.push(t));
            }, e.prototype.contains = function(t) {
              return o.createID(t), this.map[t] != null;
            }, e.prototype.get = function(t) {
              var i = o.createID(t);
              return this.map[i];
            }, e.prototype.keySet = function() {
              return this.keys;
            }, R.exports = e;
          },
          /* 23 */
          /***/
          function(R, M, T) {
            var o = T(14);
            function e() {
              this.set = {};
            }
            e.prototype.add = function(t) {
              var i = o.createID(t);
              this.contains(i) || (this.set[i] = t);
            }, e.prototype.remove = function(t) {
              delete this.set[o.createID(t)];
            }, e.prototype.clear = function() {
              this.set = {};
            }, e.prototype.contains = function(t) {
              return this.set[o.createID(t)] == t;
            }, e.prototype.isEmpty = function() {
              return this.size() === 0;
            }, e.prototype.size = function() {
              return Object.keys(this.set).length;
            }, e.prototype.addAllTo = function(t) {
              for (var i = Object.keys(this.set), h = i.length, g = 0; g < h; g++)
                t.push(this.set[i[g]]);
            }, e.prototype.size = function() {
              return Object.keys(this.set).length;
            }, e.prototype.addAll = function(t) {
              for (var i = t.length, h = 0; h < i; h++) {
                var g = t[h];
                this.add(g);
              }
            }, R.exports = e;
          },
          /* 24 */
          /***/
          function(R, M, T) {
            var o = function() {
              function h(g, n) {
                for (var d = 0; d < n.length; d++) {
                  var r = n[d];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(g, r.key, r);
                }
              }
              return function(g, n, d) {
                return n && h(g.prototype, n), d && h(g, d), g;
              };
            }();
            function e(h, g) {
              if (!(h instanceof g))
                throw new TypeError("Cannot call a class as a function");
            }
            var t = T(11), i = function() {
              function h(g, n) {
                e(this, h), (n !== null || n !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var d = void 0;
                g instanceof t ? d = g.size() : d = g.length, this._quicksort(g, 0, d - 1);
              }
              return o(h, [{
                key: "_quicksort",
                value: function(n, d, r) {
                  if (d < r) {
                    var l = this._partition(n, d, r);
                    this._quicksort(n, d, l), this._quicksort(n, l + 1, r);
                  }
                }
              }, {
                key: "_partition",
                value: function(n, d, r) {
                  for (var l = this._get(n, d), s = d, c = r; ; ) {
                    for (; this.compareFunction(l, this._get(n, c)); )
                      c--;
                    for (; this.compareFunction(this._get(n, s), l); )
                      s++;
                    if (s < c)
                      this._swap(n, s, c), s++, c--;
                    else
                      return c;
                  }
                }
              }, {
                key: "_get",
                value: function(n, d) {
                  return n instanceof t ? n.get_object_at(d) : n[d];
                }
              }, {
                key: "_set",
                value: function(n, d, r) {
                  n instanceof t ? n.set_object_at(d, r) : n[d] = r;
                }
              }, {
                key: "_swap",
                value: function(n, d, r) {
                  var l = this._get(n, d);
                  this._set(n, d, this._get(n, r)), this._set(n, r, l);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(n, d) {
                  return d > n;
                }
              }]), h;
            }();
            R.exports = i;
          },
          /* 25 */
          /***/
          function(R, M, T) {
            var o = function() {
              function i(h, g) {
                for (var n = 0; n < g.length; n++) {
                  var d = g[n];
                  d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(h, d.key, d);
                }
              }
              return function(h, g, n) {
                return g && i(h.prototype, g), n && i(h, n), h;
              };
            }();
            function e(i, h) {
              if (!(i instanceof h))
                throw new TypeError("Cannot call a class as a function");
            }
            var t = function() {
              function i(h, g) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                e(this, i), this.sequence1 = h, this.sequence2 = g, this.match_score = n, this.mismatch_penalty = d, this.gap_penalty = r, this.iMax = h.length + 1, this.jMax = g.length + 1, this.grid = new Array(this.iMax);
                for (var l = 0; l < this.iMax; l++) {
                  this.grid[l] = new Array(this.jMax);
                  for (var s = 0; s < this.jMax; s++)
                    this.grid[l][s] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var c = 0; c < this.iMax; c++) {
                  this.tracebackGrid[c] = new Array(this.jMax);
                  for (var v = 0; v < this.jMax; v++)
                    this.tracebackGrid[c][v] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return o(i, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var g = 1; g < this.jMax; g++)
                    this.grid[0][g] = this.grid[0][g - 1] + this.gap_penalty, this.tracebackGrid[0][g] = [!1, !1, !0];
                  for (var n = 1; n < this.iMax; n++)
                    this.grid[n][0] = this.grid[n - 1][0] + this.gap_penalty, this.tracebackGrid[n][0] = [!1, !0, !1];
                  for (var d = 1; d < this.iMax; d++)
                    for (var r = 1; r < this.jMax; r++) {
                      var l = void 0;
                      this.sequence1[d - 1] === this.sequence2[r - 1] ? l = this.grid[d - 1][r - 1] + this.match_score : l = this.grid[d - 1][r - 1] + this.mismatch_penalty;
                      var s = this.grid[d - 1][r] + this.gap_penalty, c = this.grid[d][r - 1] + this.gap_penalty, v = [l, s, c], L = this.arrayAllMaxIndexes(v);
                      this.grid[d][r] = v[L[0]], this.tracebackGrid[d][r] = [L.includes(0), L.includes(1), L.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var g = [];
                  for (g.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); g[0]; ) {
                    var n = g[0], d = this.tracebackGrid[n.pos[0]][n.pos[1]];
                    d[0] && g.push({
                      pos: [n.pos[0] - 1, n.pos[1] - 1],
                      seq1: this.sequence1[n.pos[0] - 1] + n.seq1,
                      seq2: this.sequence2[n.pos[1] - 1] + n.seq2
                    }), d[1] && g.push({
                      pos: [n.pos[0] - 1, n.pos[1]],
                      seq1: this.sequence1[n.pos[0] - 1] + n.seq1,
                      seq2: "-" + n.seq2
                    }), d[2] && g.push({
                      pos: [n.pos[0], n.pos[1] - 1],
                      seq1: "-" + n.seq1,
                      seq2: this.sequence2[n.pos[1] - 1] + n.seq2
                    }), n.pos[0] === 0 && n.pos[1] === 0 && this.alignments.push({
                      sequence1: n.seq1,
                      sequence2: n.seq2
                    }), g.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(g, n) {
                  for (var d = [], r = -1; (r = g.indexOf(n, r + 1)) !== -1; )
                    d.push(r);
                  return d;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(g) {
                  return this.getAllIndexes(g, Math.max.apply(null, g));
                }
              }]), i;
            }();
            R.exports = t;
          },
          /* 26 */
          /***/
          function(R, M, T) {
            var o = function() {
            };
            o.FDLayout = T(18), o.FDLayoutConstants = T(7), o.FDLayoutEdge = T(19), o.FDLayoutNode = T(20), o.DimensionD = T(21), o.HashMap = T(22), o.HashSet = T(23), o.IGeometry = T(8), o.IMath = T(9), o.Integer = T(10), o.Point = T(12), o.PointD = T(4), o.RandomSeed = T(16), o.RectangleD = T(13), o.Transform = T(17), o.UniqueIDGeneretor = T(14), o.Quicksort = T(24), o.LinkedList = T(11), o.LGraphObject = T(2), o.LGraph = T(5), o.LEdge = T(1), o.LGraphManager = T(6), o.LNode = T(3), o.Layout = T(15), o.LayoutConstants = T(0), o.NeedlemanWunsch = T(25), R.exports = o;
          },
          /* 27 */
          /***/
          function(R, M, T) {
            function o() {
              this.listeners = [];
            }
            var e = o.prototype;
            e.addListener = function(t, i) {
              this.listeners.push({
                event: t,
                callback: i
              });
            }, e.removeListener = function(t, i) {
              for (var h = this.listeners.length; h >= 0; h--) {
                var g = this.listeners[h];
                g.event === t && g.callback === i && this.listeners.splice(h, 1);
              }
            }, e.emit = function(t, i) {
              for (var h = 0; h < this.listeners.length; h++) {
                var g = this.listeners[h];
                t === g.event && g.callback(i);
              }
            }, R.exports = o;
          }
          /******/
        ])
      );
    });
  }(it)), Z;
}
var z;
function ot() {
  return z || (z = 1, function(X, B) {
    (function(M, T) {
      X.exports = T(nt());
    })(Q, function(R) {
      return (
        /******/
        function(M) {
          var T = {};
          function o(e) {
            if (T[e])
              return T[e].exports;
            var t = T[e] = {
              /******/
              i: e,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return M[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
          }
          return o.m = M, o.c = T, o.i = function(e) {
            return e;
          }, o.d = function(e, t, i) {
            o.o(e, t) || Object.defineProperty(e, t, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: i
              /******/
            });
          }, o.n = function(e) {
            var t = e && e.__esModule ? (
              /******/
              function() {
                return e.default;
              }
            ) : (
              /******/
              function() {
                return e;
              }
            );
            return o.d(t, "a", t), t;
          }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, o.p = "", o(o.s = 7);
        }([
          /* 0 */
          /***/
          function(M, T) {
            M.exports = R;
          },
          /* 1 */
          /***/
          function(M, T, o) {
            var e = o(0).FDLayoutConstants;
            function t() {
            }
            for (var i in e)
              t[i] = e[i];
            t.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, t.DEFAULT_RADIAL_SEPARATION = e.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = !0, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TREE_REDUCTION_ON_INCREMENTAL = !1, M.exports = t;
          },
          /* 2 */
          /***/
          function(M, T, o) {
            var e = o(0).FDLayoutEdge;
            function t(h, g, n) {
              e.call(this, h, g, n);
            }
            t.prototype = Object.create(e.prototype);
            for (var i in e)
              t[i] = e[i];
            M.exports = t;
          },
          /* 3 */
          /***/
          function(M, T, o) {
            var e = o(0).LGraph;
            function t(h, g, n) {
              e.call(this, h, g, n);
            }
            t.prototype = Object.create(e.prototype);
            for (var i in e)
              t[i] = e[i];
            M.exports = t;
          },
          /* 4 */
          /***/
          function(M, T, o) {
            var e = o(0).LGraphManager;
            function t(h) {
              e.call(this, h);
            }
            t.prototype = Object.create(e.prototype);
            for (var i in e)
              t[i] = e[i];
            M.exports = t;
          },
          /* 5 */
          /***/
          function(M, T, o) {
            var e = o(0).FDLayoutNode, t = o(0).IMath;
            function i(g, n, d, r) {
              e.call(this, g, n, d, r);
            }
            i.prototype = Object.create(e.prototype);
            for (var h in e)
              i[h] = e[h];
            i.prototype.move = function() {
              var g = this.graphManager.getLayout();
              this.displacementX = g.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = g.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > g.coolingFactor * g.maxNodeDisplacement && (this.displacementX = g.coolingFactor * g.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > g.coolingFactor * g.maxNodeDisplacement && (this.displacementY = g.coolingFactor * g.maxNodeDisplacement * t.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), g.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, i.prototype.propogateDisplacementToChildren = function(g, n) {
              for (var d = this.getChild().getNodes(), r, l = 0; l < d.length; l++)
                r = d[l], r.getChild() == null ? (r.moveBy(g, n), r.displacementX += g, r.displacementY += n) : r.propogateDisplacementToChildren(g, n);
            }, i.prototype.setPred1 = function(g) {
              this.pred1 = g;
            }, i.prototype.getPred1 = function() {
              return pred1;
            }, i.prototype.getPred2 = function() {
              return pred2;
            }, i.prototype.setNext = function(g) {
              this.next = g;
            }, i.prototype.getNext = function() {
              return next;
            }, i.prototype.setProcessed = function(g) {
              this.processed = g;
            }, i.prototype.isProcessed = function() {
              return processed;
            }, M.exports = i;
          },
          /* 6 */
          /***/
          function(M, T, o) {
            var e = o(0).FDLayout, t = o(4), i = o(3), h = o(5), g = o(2), n = o(1), d = o(0).FDLayoutConstants, r = o(0).LayoutConstants, l = o(0).Point, s = o(0).PointD, c = o(0).Layout, v = o(0).Integer, L = o(0).IGeometry, p = o(0).LGraph, A = o(0).Transform;
            function E() {
              e.call(this), this.toBeTiled = {};
            }
            E.prototype = Object.create(e.prototype);
            for (var O in e)
              E[O] = e[O];
            E.prototype.newGraphManager = function() {
              var a = new t(this);
              return this.graphManager = a, a;
            }, E.prototype.newGraph = function(a) {
              return new i(null, this.graphManager, a);
            }, E.prototype.newNode = function(a) {
              return new h(this.graphManager, a);
            }, E.prototype.newEdge = function(a) {
              return new g(null, null, a);
            }, E.prototype.initParameters = function() {
              e.prototype.initParameters.call(this, arguments), this.isSubLayout || (n.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = n.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = d.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = d.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / d.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = d.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, E.prototype.layout = function() {
              var a = r.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return a && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, E.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (n.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var u = new Set(this.getAllNodes()), f = this.nodesWithGravity.filter(function(N) {
                    return u.has(N);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(f);
                }
              } else {
                var a = this.getFlatForest();
                if (a.length > 0)
                  this.positionNodesRadially(a);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var u = new Set(this.getAllNodes()), f = this.nodesWithGravity.filter(function(y) {
                    return u.has(y);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(f), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
            }, E.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = !0;
                else
                  return !0;
              if (this.totalIterations % d.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = !0;
                  else
                    return !0;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var a = new Set(this.getAllNodes()), u = this.nodesWithGravity.filter(function(D) {
                      return a.has(D);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(u), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return !0;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var f = !this.isTreeGrowing && !this.isGrowthFinished, y = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(f, y), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
            }, E.prototype.getPositionsData = function() {
              for (var a = this.graphManager.getAllNodes(), u = {}, f = 0; f < a.length; f++) {
                var y = a[f].rect, D = a[f].id;
                u[D] = {
                  id: D,
                  x: y.getCenterX(),
                  y: y.getCenterY(),
                  w: y.width,
                  h: y.height
                };
              }
              return u;
            }, E.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var a = !1;
              if (d.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !a; )
                  a = this.tick();
                this.graphManager.updateBounds();
              }
            }, E.prototype.calculateNodesToApplyGravitationTo = function() {
              var a = [], u, f = this.graphManager.getGraphs(), y = f.length, D;
              for (D = 0; D < y; D++)
                u = f[D], u.updateConnected(), u.isConnected || (a = a.concat(u.getNodes()));
              return a;
            }, E.prototype.createBendpoints = function() {
              var a = [];
              a = a.concat(this.graphManager.getAllEdges());
              var u = /* @__PURE__ */ new Set(), f;
              for (f = 0; f < a.length; f++) {
                var y = a[f];
                if (!u.has(y)) {
                  var D = y.getSource(), N = y.getTarget();
                  if (D == N)
                    y.getBendpoints().push(new s()), y.getBendpoints().push(new s()), this.createDummyNodesForBendpoints(y), u.add(y);
                  else {
                    var I = [];
                    if (I = I.concat(D.getEdgeListToNode(N)), I = I.concat(N.getEdgeListToNode(D)), !u.has(I[0])) {
                      if (I.length > 1) {
                        var m;
                        for (m = 0; m < I.length; m++) {
                          var C = I[m];
                          C.getBendpoints().push(new s()), this.createDummyNodesForBendpoints(C);
                        }
                      }
                      I.forEach(function(F) {
                        u.add(F);
                      });
                    }
                  }
                }
                if (u.size == a.length)
                  break;
              }
            }, E.prototype.positionNodesRadially = function(a) {
              for (var u = new l(0, 0), f = Math.ceil(Math.sqrt(a.length)), y = 0, D = 0, N = 0, I = new s(0, 0), m = 0; m < a.length; m++) {
                m % f == 0 && (N = 0, D = y, m != 0 && (D += n.DEFAULT_COMPONENT_SEPERATION), y = 0);
                var C = a[m], F = c.findCenterOfTree(C);
                u.x = N, u.y = D, I = E.radialLayout(C, F, u), I.y > y && (y = Math.floor(I.y)), N = Math.floor(I.x + n.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new s(r.WORLD_CENTER_X - I.x / 2, r.WORLD_CENTER_Y - I.y / 2));
            }, E.radialLayout = function(a, u, f) {
              var y = Math.max(this.maxDiagonalInTree(a), n.DEFAULT_RADIAL_SEPARATION);
              E.branchRadialLayout(u, null, 0, 359, 0, y);
              var D = p.calculateBounds(a), N = new A();
              N.setDeviceOrgX(D.getMinX()), N.setDeviceOrgY(D.getMinY()), N.setWorldOrgX(f.x), N.setWorldOrgY(f.y);
              for (var I = 0; I < a.length; I++) {
                var m = a[I];
                m.transform(N);
              }
              var C = new s(D.getMaxX(), D.getMaxY());
              return N.inverseTransformPoint(C);
            }, E.branchRadialLayout = function(a, u, f, y, D, N) {
              var I = (y - f + 1) / 2;
              I < 0 && (I += 180);
              var m = (I + f) % 360, C = m * L.TWO_PI / 360, F = D * Math.cos(C), P = D * Math.sin(C);
              a.setCenter(F, P);
              var w = [];
              w = w.concat(a.getEdges());
              var G = w.length;
              u != null && G--;
              for (var x = 0, S = w.length, U, Y = a.getEdgesBetween(u); Y.length > 1; ) {
                var _ = Y[0];
                Y.splice(0, 1);
                var b = w.indexOf(_);
                b >= 0 && w.splice(b, 1), S--, G--;
              }
              u != null ? U = (w.indexOf(Y[0]) + 1) % S : U = 0;
              for (var H = Math.abs(y - f) / G, W = U; x != G; W = ++W % S) {
                var K = w[W].getOtherEnd(a);
                if (K != u) {
                  var j = (f + x * H) % 360, J = (j + H) % 360;
                  E.branchRadialLayout(K, a, j, J, D + N, N), x++;
                }
              }
            }, E.maxDiagonalInTree = function(a) {
              for (var u = v.MIN_VALUE, f = 0; f < a.length; f++) {
                var y = a[f], D = y.getDiagonal();
                D > u && (u = D);
              }
              return u;
            }, E.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, E.prototype.groupZeroDegreeMembers = function() {
              var a = this, u = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var f = [], y = this.graphManager.getAllNodes(), D = 0; D < y.length; D++) {
                var N = y[D], I = N.getParent();
                this.getNodeDegreeWithChildren(N) === 0 && (I.id == null || !this.getToBeTiled(I)) && f.push(N);
              }
              for (var D = 0; D < f.length; D++) {
                var N = f[D], m = N.getParent().id;
                typeof u[m] > "u" && (u[m] = []), u[m] = u[m].concat(N);
              }
              Object.keys(u).forEach(function(C) {
                if (u[C].length > 1) {
                  var F = "DummyCompound_" + C;
                  a.memberGroups[F] = u[C];
                  var P = u[C][0].getParent(), w = new h(a.graphManager);
                  w.id = F, w.paddingLeft = P.paddingLeft || 0, w.paddingRight = P.paddingRight || 0, w.paddingBottom = P.paddingBottom || 0, w.paddingTop = P.paddingTop || 0, a.idToDummyNode[F] = w;
                  var G = a.getGraphManager().add(a.newGraph(), w), x = P.getChild();
                  x.add(w);
                  for (var S = 0; S < u[C].length; S++) {
                    var U = u[C][S];
                    x.remove(U), G.add(U);
                  }
                }
              });
            }, E.prototype.clearCompounds = function() {
              var a = {}, u = {};
              this.performDFSOnCompounds();
              for (var f = 0; f < this.compoundOrder.length; f++)
                u[this.compoundOrder[f].id] = this.compoundOrder[f], a[this.compoundOrder[f].id] = [].concat(this.compoundOrder[f].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[f].getChild()), this.compoundOrder[f].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(a, u);
            }, E.prototype.clearZeroDegreeMembers = function() {
              var a = this, u = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(f) {
                var y = a.idToDummyNode[f];
                u[f] = a.tileNodes(a.memberGroups[f], y.paddingLeft + y.paddingRight), y.rect.width = u[f].width, y.rect.height = u[f].height;
              });
            }, E.prototype.repopulateCompounds = function() {
              for (var a = this.compoundOrder.length - 1; a >= 0; a--) {
                var u = this.compoundOrder[a], f = u.id, y = u.paddingLeft, D = u.paddingTop;
                this.adjustLocations(this.tiledMemberPack[f], u.rect.x, u.rect.y, y, D);
              }
            }, E.prototype.repopulateZeroDegreeMembers = function() {
              var a = this, u = this.tiledZeroDegreePack;
              Object.keys(u).forEach(function(f) {
                var y = a.idToDummyNode[f], D = y.paddingLeft, N = y.paddingTop;
                a.adjustLocations(u[f], y.rect.x, y.rect.y, D, N);
              });
            }, E.prototype.getToBeTiled = function(a) {
              var u = a.id;
              if (this.toBeTiled[u] != null)
                return this.toBeTiled[u];
              var f = a.getChild();
              if (f == null)
                return this.toBeTiled[u] = !1, !1;
              for (var y = f.getNodes(), D = 0; D < y.length; D++) {
                var N = y[D];
                if (this.getNodeDegree(N) > 0)
                  return this.toBeTiled[u] = !1, !1;
                if (N.getChild() == null) {
                  this.toBeTiled[N.id] = !1;
                  continue;
                }
                if (!this.getToBeTiled(N))
                  return this.toBeTiled[u] = !1, !1;
              }
              return this.toBeTiled[u] = !0, !0;
            }, E.prototype.getNodeDegree = function(a) {
              a.id;
              for (var u = a.getEdges(), f = 0, y = 0; y < u.length; y++) {
                var D = u[y];
                D.getSource().id !== D.getTarget().id && (f = f + 1);
              }
              return f;
            }, E.prototype.getNodeDegreeWithChildren = function(a) {
              var u = this.getNodeDegree(a);
              if (a.getChild() == null)
                return u;
              for (var f = a.getChild().getNodes(), y = 0; y < f.length; y++) {
                var D = f[y];
                u += this.getNodeDegreeWithChildren(D);
              }
              return u;
            }, E.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, E.prototype.fillCompexOrderByDFS = function(a) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                f.getChild() != null && this.fillCompexOrderByDFS(f.getChild().getNodes()), this.getToBeTiled(f) && this.compoundOrder.push(f);
              }
            }, E.prototype.adjustLocations = function(a, u, f, y, D) {
              u += y, f += D;
              for (var N = u, I = 0; I < a.rows.length; I++) {
                var m = a.rows[I];
                u = N;
                for (var C = 0, F = 0; F < m.length; F++) {
                  var P = m[F];
                  P.rect.x = u, P.rect.y = f, u += P.rect.width + a.horizontalPadding, P.rect.height > C && (C = P.rect.height);
                }
                f += C + a.verticalPadding;
              }
            }, E.prototype.tileCompoundMembers = function(a, u) {
              var f = this;
              this.tiledMemberPack = [], Object.keys(a).forEach(function(y) {
                var D = u[y];
                f.tiledMemberPack[y] = f.tileNodes(a[y], D.paddingLeft + D.paddingRight), D.rect.width = f.tiledMemberPack[y].width, D.rect.height = f.tiledMemberPack[y].height;
              });
            }, E.prototype.tileNodes = function(a, u) {
              var f = n.TILING_PADDING_VERTICAL, y = n.TILING_PADDING_HORIZONTAL, D = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: u,
                // assume minHeight equals to minWidth
                verticalPadding: f,
                horizontalPadding: y
              };
              a.sort(function(m, C) {
                return m.rect.width * m.rect.height > C.rect.width * C.rect.height ? -1 : m.rect.width * m.rect.height < C.rect.width * C.rect.height ? 1 : 0;
              });
              for (var N = 0; N < a.length; N++) {
                var I = a[N];
                D.rows.length == 0 ? this.insertNodeToRow(D, I, 0, u) : this.canAddHorizontal(D, I.rect.width, I.rect.height) ? this.insertNodeToRow(D, I, this.getShortestRowIndex(D), u) : this.insertNodeToRow(D, I, D.rows.length, u), this.shiftToLastRow(D);
              }
              return D;
            }, E.prototype.insertNodeToRow = function(a, u, f, y) {
              var D = y;
              if (f == a.rows.length) {
                var N = [];
                a.rows.push(N), a.rowWidth.push(D), a.rowHeight.push(0);
              }
              var I = a.rowWidth[f] + u.rect.width;
              a.rows[f].length > 0 && (I += a.horizontalPadding), a.rowWidth[f] = I, a.width < I && (a.width = I);
              var m = u.rect.height;
              f > 0 && (m += a.verticalPadding);
              var C = 0;
              m > a.rowHeight[f] && (C = a.rowHeight[f], a.rowHeight[f] = m, C = a.rowHeight[f] - C), a.height += C, a.rows[f].push(u);
            }, E.prototype.getShortestRowIndex = function(a) {
              for (var u = -1, f = Number.MAX_VALUE, y = 0; y < a.rows.length; y++)
                a.rowWidth[y] < f && (u = y, f = a.rowWidth[y]);
              return u;
            }, E.prototype.getLongestRowIndex = function(a) {
              for (var u = -1, f = Number.MIN_VALUE, y = 0; y < a.rows.length; y++)
                a.rowWidth[y] > f && (u = y, f = a.rowWidth[y]);
              return u;
            }, E.prototype.canAddHorizontal = function(a, u, f) {
              var y = this.getShortestRowIndex(a);
              if (y < 0)
                return !0;
              var D = a.rowWidth[y];
              if (D + a.horizontalPadding + u <= a.width)
                return !0;
              var N = 0;
              a.rowHeight[y] < f && y > 0 && (N = f + a.verticalPadding - a.rowHeight[y]);
              var I;
              a.width - D >= u + a.horizontalPadding ? I = (a.height + N) / (D + u + a.horizontalPadding) : I = (a.height + N) / a.width, N = f + a.verticalPadding;
              var m;
              return a.width < u ? m = (a.height + N) / u : m = (a.height + N) / a.width, m < 1 && (m = 1 / m), I < 1 && (I = 1 / I), I < m;
            }, E.prototype.shiftToLastRow = function(a) {
              var u = this.getLongestRowIndex(a), f = a.rowWidth.length - 1, y = a.rows[u], D = y[y.length - 1], N = D.width + a.horizontalPadding;
              if (a.width - a.rowWidth[f] > N && u != f) {
                y.splice(-1, 1), a.rows[f].push(D), a.rowWidth[u] = a.rowWidth[u] - N, a.rowWidth[f] = a.rowWidth[f] + N, a.width = a.rowWidth[instance.getLongestRowIndex(a)];
                for (var I = Number.MIN_VALUE, m = 0; m < y.length; m++)
                  y[m].height > I && (I = y[m].height);
                u > 0 && (I += a.verticalPadding);
                var C = a.rowHeight[u] + a.rowHeight[f];
                a.rowHeight[u] = I, a.rowHeight[f] < D.height + a.verticalPadding && (a.rowHeight[f] = D.height + a.verticalPadding);
                var F = a.rowHeight[u] + a.rowHeight[f];
                a.height += F - C, this.shiftToLastRow(a);
              }
            }, E.prototype.tilingPreLayout = function() {
              n.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, E.prototype.tilingPostLayout = function() {
              n.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, E.prototype.reduceTrees = function() {
              for (var a = [], u = !0, f; u; ) {
                var y = this.graphManager.getAllNodes(), D = [];
                u = !1;
                for (var N = 0; N < y.length; N++)
                  f = y[N], f.getEdges().length == 1 && !f.getEdges()[0].isInterGraph && f.getChild() == null && (D.push([f, f.getEdges()[0], f.getOwner()]), u = !0);
                if (u == !0) {
                  for (var I = [], m = 0; m < D.length; m++)
                    D[m][0].getEdges().length == 1 && (I.push(D[m]), D[m][0].getOwner().remove(D[m][0]));
                  a.push(I), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = a;
            }, E.prototype.growTree = function(a) {
              for (var u = a.length, f = a[u - 1], y, D = 0; D < f.length; D++)
                y = f[D], this.findPlaceforPrunedNode(y), y[2].add(y[0]), y[2].add(y[1], y[1].source, y[1].target);
              a.splice(a.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, E.prototype.findPlaceforPrunedNode = function(a) {
              var u, f, y = a[0];
              y == a[1].source ? f = a[1].target : f = a[1].source;
              var D = f.startX, N = f.finishX, I = f.startY, m = f.finishY, C = 0, F = 0, P = 0, w = 0, G = [C, P, F, w];
              if (I > 0)
                for (var x = D; x <= N; x++)
                  G[0] += this.grid[x][I - 1].length + this.grid[x][I].length - 1;
              if (N < this.grid.length - 1)
                for (var x = I; x <= m; x++)
                  G[1] += this.grid[N + 1][x].length + this.grid[N][x].length - 1;
              if (m < this.grid[0].length - 1)
                for (var x = D; x <= N; x++)
                  G[2] += this.grid[x][m + 1].length + this.grid[x][m].length - 1;
              if (D > 0)
                for (var x = I; x <= m; x++)
                  G[3] += this.grid[D - 1][x].length + this.grid[D][x].length - 1;
              for (var S = v.MAX_VALUE, U, Y, _ = 0; _ < G.length; _++)
                G[_] < S ? (S = G[_], U = 1, Y = _) : G[_] == S && U++;
              if (U == 3 && S == 0)
                G[0] == 0 && G[1] == 0 && G[2] == 0 ? u = 1 : G[0] == 0 && G[1] == 0 && G[3] == 0 ? u = 0 : G[0] == 0 && G[2] == 0 && G[3] == 0 ? u = 3 : G[1] == 0 && G[2] == 0 && G[3] == 0 && (u = 2);
              else if (U == 2 && S == 0) {
                var b = Math.floor(Math.random() * 2);
                G[0] == 0 && G[1] == 0 ? b == 0 ? u = 0 : u = 1 : G[0] == 0 && G[2] == 0 ? b == 0 ? u = 0 : u = 2 : G[0] == 0 && G[3] == 0 ? b == 0 ? u = 0 : u = 3 : G[1] == 0 && G[2] == 0 ? b == 0 ? u = 1 : u = 2 : G[1] == 0 && G[3] == 0 ? b == 0 ? u = 1 : u = 3 : b == 0 ? u = 2 : u = 3;
              } else if (U == 4 && S == 0) {
                var b = Math.floor(Math.random() * 4);
                u = b;
              } else
                u = Y;
              u == 0 ? y.setCenter(f.getCenterX(), f.getCenterY() - f.getHeight() / 2 - d.DEFAULT_EDGE_LENGTH - y.getHeight() / 2) : u == 1 ? y.setCenter(f.getCenterX() + f.getWidth() / 2 + d.DEFAULT_EDGE_LENGTH + y.getWidth() / 2, f.getCenterY()) : u == 2 ? y.setCenter(f.getCenterX(), f.getCenterY() + f.getHeight() / 2 + d.DEFAULT_EDGE_LENGTH + y.getHeight() / 2) : y.setCenter(f.getCenterX() - f.getWidth() / 2 - d.DEFAULT_EDGE_LENGTH - y.getWidth() / 2, f.getCenterY());
            }, M.exports = E;
          },
          /* 7 */
          /***/
          function(M, T, o) {
            var e = {};
            e.layoutBase = o(0), e.CoSEConstants = o(1), e.CoSEEdge = o(2), e.CoSEGraph = o(3), e.CoSEGraphManager = o(4), e.CoSELayout = o(6), e.CoSENode = o(5), M.exports = e;
          }
          /******/
        ])
      );
    });
  }(rt)), k;
}
(function(X, B) {
  (function(M, T) {
    X.exports = T(ot());
  })(Q, function(R) {
    return (
      /******/
      function(M) {
        var T = {};
        function o(e) {
          if (T[e])
            return T[e].exports;
          var t = T[e] = {
            /******/
            i: e,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return M[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
        }
        return o.m = M, o.c = T, o.i = function(e) {
          return e;
        }, o.d = function(e, t, i) {
          o.o(e, t) || Object.defineProperty(e, t, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: i
            /******/
          });
        }, o.n = function(e) {
          var t = e && e.__esModule ? (
            /******/
            function() {
              return e.default;
            }
          ) : (
            /******/
            function() {
              return e;
            }
          );
          return o.d(t, "a", t), t;
        }, o.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, o.p = "", o(o.s = 1);
      }([
        /* 0 */
        /***/
        function(M, T) {
          M.exports = R;
        },
        /* 1 */
        /***/
        function(M, T, o) {
          var e = o(0).layoutBase.LayoutConstants, t = o(0).layoutBase.FDLayoutConstants, i = o(0).CoSEConstants, h = o(0).CoSELayout, g = o(0).CoSENode, n = o(0).layoutBase.PointD, d = o(0).layoutBase.DimensionD, r = {
            // Called on `layoutready`
            ready: function() {
            },
            // Called on `layoutstop`
            stop: function() {
            },
            // 'draft', 'default' or 'proof" 
            // - 'draft' fast cooling rate 
            // - 'default' moderate cooling rate 
            // - "proof" slow cooling rate
            quality: "default",
            // include labels in node dimensions
            nodeDimensionsIncludeLabels: !1,
            // number of ticks per frame; higher is faster but more jerky
            refresh: 30,
            // Whether to fit the network view after when done
            fit: !0,
            // Padding on fit
            padding: 10,
            // Whether to enable incremental mode
            randomize: !0,
            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: 4500,
            // Ideal edge (non nested) length
            idealEdgeLength: 50,
            // Divisor to compute edge forces
            edgeElasticity: 0.45,
            // Nesting factor (multiplier) to compute ideal edge length for nested edges
            nestingFactor: 0.1,
            // Gravity force (constant)
            gravity: 0.25,
            // Maximum number of iterations to perform
            numIter: 2500,
            // For enabling tiling
            tile: !0,
            // Type of layout animation. The option set is {'during', 'end', false}
            animate: "end",
            // Duration for animate:end
            animationDuration: 500,
            // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingVertical: 10,
            // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingHorizontal: 10,
            // Gravity range (constant) for compounds
            gravityRangeCompound: 1.5,
            // Gravity force (constant) for compounds
            gravityCompound: 1,
            // Gravity range (constant)
            gravityRange: 3.8,
            // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.5
          };
          function l(L, p) {
            var A = {};
            for (var E in L)
              A[E] = L[E];
            for (var E in p)
              A[E] = p[E];
            return A;
          }
          function s(L) {
            this.options = l(r, L), c(this.options);
          }
          var c = function(p) {
            p.nodeRepulsion != null && (i.DEFAULT_REPULSION_STRENGTH = t.DEFAULT_REPULSION_STRENGTH = p.nodeRepulsion), p.idealEdgeLength != null && (i.DEFAULT_EDGE_LENGTH = t.DEFAULT_EDGE_LENGTH = p.idealEdgeLength), p.edgeElasticity != null && (i.DEFAULT_SPRING_STRENGTH = t.DEFAULT_SPRING_STRENGTH = p.edgeElasticity), p.nestingFactor != null && (i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = p.nestingFactor), p.gravity != null && (i.DEFAULT_GRAVITY_STRENGTH = t.DEFAULT_GRAVITY_STRENGTH = p.gravity), p.numIter != null && (i.MAX_ITERATIONS = t.MAX_ITERATIONS = p.numIter), p.gravityRange != null && (i.DEFAULT_GRAVITY_RANGE_FACTOR = t.DEFAULT_GRAVITY_RANGE_FACTOR = p.gravityRange), p.gravityCompound != null && (i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH = p.gravityCompound), p.gravityRangeCompound != null && (i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = p.gravityRangeCompound), p.initialEnergyOnIncremental != null && (i.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.DEFAULT_COOLING_FACTOR_INCREMENTAL = p.initialEnergyOnIncremental), p.quality == "draft" ? e.QUALITY = 0 : p.quality == "proof" ? e.QUALITY = 2 : e.QUALITY = 1, i.NODE_DIMENSIONS_INCLUDE_LABELS = t.NODE_DIMENSIONS_INCLUDE_LABELS = e.NODE_DIMENSIONS_INCLUDE_LABELS = p.nodeDimensionsIncludeLabels, i.DEFAULT_INCREMENTAL = t.DEFAULT_INCREMENTAL = e.DEFAULT_INCREMENTAL = !p.randomize, i.ANIMATE = t.ANIMATE = e.ANIMATE = p.animate, i.TILE = p.tile, i.TILING_PADDING_VERTICAL = typeof p.tilingPaddingVertical == "function" ? p.tilingPaddingVertical.call() : p.tilingPaddingVertical, i.TILING_PADDING_HORIZONTAL = typeof p.tilingPaddingHorizontal == "function" ? p.tilingPaddingHorizontal.call() : p.tilingPaddingHorizontal;
          };
          s.prototype.run = function() {
            var L, p, A = this.options;
            this.idToLNode = {};
            var E = this.layout = new h(), O = this;
            O.stopped = !1, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
            var a = E.newGraphManager();
            this.gm = a;
            var u = this.options.eles.nodes(), f = this.options.eles.edges();
            this.root = a.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(u), E);
            for (var y = 0; y < f.length; y++) {
              var D = f[y], N = this.idToLNode[D.data("source")], I = this.idToLNode[D.data("target")];
              if (N !== I && N.getEdgesBetween(I).length == 0) {
                var m = a.add(E.newEdge(), N, I);
                m.id = D.id();
              }
            }
            var C = function(w, G) {
              typeof w == "number" && (w = G);
              var x = w.data("id"), S = O.idToLNode[x];
              return {
                x: S.getRect().getCenterX(),
                y: S.getRect().getCenterY()
              };
            }, F = function P() {
              for (var w = function() {
                A.fit && A.cy.fit(A.eles, A.padding), L || (L = !0, O.cy.one("layoutready", A.ready), O.cy.trigger({ type: "layoutready", layout: O }));
              }, G = O.options.refresh, x, S = 0; S < G && !x; S++)
                x = O.stopped || O.layout.tick();
              if (x) {
                E.checkLayoutSuccess() && !E.isSubLayout && E.doPostLayout(), E.tilingPostLayout && E.tilingPostLayout(), E.isLayoutFinished = !0, O.options.eles.nodes().positions(C), w(), O.cy.one("layoutstop", O.options.stop), O.cy.trigger({ type: "layoutstop", layout: O }), p && cancelAnimationFrame(p), L = !1;
                return;
              }
              var U = O.layout.getPositionsData();
              A.eles.nodes().positions(function(Y, _) {
                if (typeof Y == "number" && (Y = _), !Y.isParent()) {
                  for (var b = Y.id(), H = U[b], W = Y; H == null && (H = U[W.data("parent")] || U["DummyCompound_" + W.data("parent")], U[b] = H, W = W.parent()[0], W != null); )
                    ;
                  return H != null ? {
                    x: H.x,
                    y: H.y
                  } : {
                    x: Y.position("x"),
                    y: Y.position("y")
                  };
                }
              }), w(), p = requestAnimationFrame(P);
            };
            return E.addListener("layoutstarted", function() {
              O.options.animate === "during" && (p = requestAnimationFrame(F));
            }), E.runLayout(), this.options.animate !== "during" && (O.options.eles.nodes().not(":parent").layoutPositions(O, O.options, C), L = !1), this;
          }, s.prototype.getTopMostNodes = function(L) {
            for (var p = {}, A = 0; A < L.length; A++)
              p[L[A].id()] = !0;
            var E = L.filter(function(O, a) {
              typeof O == "number" && (O = a);
              for (var u = O.parent()[0]; u != null; ) {
                if (p[u.id()])
                  return !1;
                u = u.parent()[0];
              }
              return !0;
            });
            return E;
          }, s.prototype.processChildrenList = function(L, p, A) {
            for (var E = p.length, O = 0; O < E; O++) {
              var a = p[O], u = a.children(), f, y = a.layoutDimensions({
                nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
              });
              if (a.outerWidth() != null && a.outerHeight() != null ? f = L.add(new g(A.graphManager, new n(a.position("x") - y.w / 2, a.position("y") - y.h / 2), new d(parseFloat(y.w), parseFloat(y.h)))) : f = L.add(new g(this.graphManager)), f.id = a.data("id"), f.paddingLeft = parseInt(a.css("padding")), f.paddingTop = parseInt(a.css("padding")), f.paddingRight = parseInt(a.css("padding")), f.paddingBottom = parseInt(a.css("padding")), this.options.nodeDimensionsIncludeLabels && a.isParent()) {
                var D = a.boundingBox({ includeLabels: !0, includeNodes: !1 }).w, N = a.boundingBox({ includeLabels: !0, includeNodes: !1 }).h, I = a.css("text-halign");
                f.labelWidth = D, f.labelHeight = N, f.labelPos = I;
              }
              if (this.idToLNode[a.data("id")] = f, isNaN(f.rect.x) && (f.rect.x = 0), isNaN(f.rect.y) && (f.rect.y = 0), u != null && u.length > 0) {
                var m;
                m = A.getGraphManager().add(A.newGraph(), f), this.processChildrenList(m, u, A);
              }
            }
          }, s.prototype.stop = function() {
            return this.stopped = !0, this;
          };
          var v = function(p) {
            p("layout", "cose-bilkent", s);
          };
          typeof cytoscape < "u" && v(cytoscape), M.exports = v;
        }
        /******/
      ])
    );
  });
})(et);
const at = /* @__PURE__ */ q(V), ht = /* @__PURE__ */ tt({
  __proto__: null,
  default: at
}, [V]);
export {
  ht as c
};
//# sourceMappingURL=cytoscape-cose-bilkent-ce67c900.js.map
